#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


import logging
import traceback
from datetime import datetime
from typing import Any, Iterable, Iterator, Mapping, MutableMapping

from airbyte_cdk import AirbyteLogger
from airbyte_cdk.models import (
    AirbyteCatalog,
    AirbyteConnectionStatus,
    AirbyteMessage,
    AirbyteRecordMessage,
    ConfiguredAirbyteCatalog,
    Status,
    Type,
)
from airbyte_cdk.sources import Source
from pandas.errors import ParserError

from .client import Client


class SourceFile(Source):
    """This source aims to provide support for readers of different file formats stored in various locations.

    It is optionally using s3fs, gcfs or smart_open libraries to handle efficient streaming of very large files
    (either compressed or not).

    Supported examples of URL this can accept are as follows:
    ```
        s3://my_bucket/my_key
        s3://my_key:my_secret@my_bucket/my_key
        gs://my_bucket/my_blob
        azure://my_bucket/my_blob (not tested)
        hdfs:///path/file (not tested)
        hdfs://path/file (not tested)
        webhdfs://host:port/path/file (not tested)
        ./local/path/file
        ~/local/path/file
        local/path/file
        ./local/path/file.gz
        file:///home/user/file
        file:///home/user/file.bz2
        [ssh|scp|sftp]://username@host//path/file
        [ssh|scp|sftp]://username@host/path/file
        [ssh|scp|sftp]://username:password@host/path/file
    ```

    The source reader currently leverages `read_csv` but will be extended to readers of different formats for
    more potential sources as described below:
    https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html
    - read_json
    - read_html
    - read_excel
    - read_feather
    - read_parquet
    - read_orc
    - read_pickle

    All the options of the readers are exposed to the configuration file of this connector so it is possible to
    override header names, types, encoding, etc

    Note that this implementation is handling `url` target as a single file at the moment.
    We will expand the capabilities of this source to discover and load either glob of multiple files,
    content of directories, etc in a latter iteration.
    """

    client_class = Client

    def _get_client(self, config: Mapping):
        """Construct client"""
        client = self.client_class(**config)

        return client

    def check(self, logger, config: Mapping) -> AirbyteConnectionStatus:
        """
        Check involves verifying that the specified file is reachable with
        our credentials.
        """
        client = self._get_client(config)
        logger.info(f"Checking access to {client.reader.full_url}...")
        try:
            with client.reader.open() as f:
                if config.get("provider").get("storage") == "HTTPS":
                    # on behalf of https://github.com/airbytehq/alpha-beta-issues/issues/224
                    # some providers like Dropbox creates the Shared Public URLs with ?dl=0 query param,
                    # this requires user interaction before accessing the file,
                    # we should validate this on the Check Connection stage to avoid sync issues further.
                    client.CSV_CHUNK_SIZE = 2
                    next(client.load_dataframes(f))
                    return AirbyteConnectionStatus(status=Status.SUCCEEDED)
                # for all other formats and storrage providers
                return AirbyteConnectionStatus(status=Status.SUCCEEDED)
        except ParserError:
            reason = f"Failed to load {client.reader.full_url}, check the URL is valid and allows to download file directly"
            logger.error(reason)
            return AirbyteConnectionStatus(status=Status.FAILED, message=reason)
        except Exception as err:
            reason = f"Failed to load {client.reader.full_url}: {repr(err)}\n{traceback.format_exc()}"
            logger.error(reason)
            return AirbyteConnectionStatus(status=Status.FAILED, message=reason)

    def discover(self, logger: AirbyteLogger, config: Mapping) -> AirbyteCatalog:
        """
        Returns an AirbyteCatalog representing the available streams and fields in this integration. For example, given valid credentials to a
        Remote CSV File, returns an Airbyte catalog where each csv file is a stream, and each column is a field.
        """
        client = self._get_client(config)
        name = client.stream_name

        logger.info(f"Discovering schema of {name} at {client.reader.full_url}...")
        try:
            streams = list(client.streams)
        except Exception as err:
            reason = f"Failed to discover schemas of {name} at {client.reader.full_url}: {repr(err)}\n{traceback.format_exc()}"
            logger.error(reason)
            raise err
        return AirbyteCatalog(streams=streams)

    def read(
        self,
        logger: logging.Logger,
        config: Mapping[str, Any],
        catalog: ConfiguredAirbyteCatalog,
        state: MutableMapping[str, Any] = None,
    ) -> Iterator[AirbyteMessage]:
        """Returns a generator of the AirbyteMessages generated by reading the source with the given configuration, catalog, and state."""
        client = self._get_client(config)
        fields = self.selected_fields(catalog)
        name = client.stream_name

        logger.info(f"Reading {name} ({client.reader.full_url})...")
        try:
            for row in client.read(fields=fields):
                record = AirbyteRecordMessage(stream=name, data=row, emitted_at=int(datetime.now().timestamp()) * 1000)
                yield AirbyteMessage(type=Type.RECORD, record=record)
        except Exception as err:
            reason = f"Failed to read data of {name} at {client.reader.full_url}: {repr(err)}\n{traceback.format_exc()}"
            logger.error(reason)
            raise err

    @staticmethod
    def selected_fields(catalog: ConfiguredAirbyteCatalog) -> Iterable:
        for configured_stream in catalog.streams:
            yield from configured_stream.stream.json_schema["properties"].keys()
