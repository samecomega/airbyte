
      insert into test_normalization.renamed_dedup_cdc_excluded ("_airbyte_unique_key", "id", "_ab_cdc_updated_at", "_airbyte_ab_id", "_airbyte_emitted_at", "_airbyte_normalized_at", "_airbyte_renamed_dedup_cdc_excluded_hashid")
  select "_airbyte_unique_key", "id", "_ab_cdc_updated_at", "_airbyte_ab_id", "_airbyte_emitted_at", "_airbyte_normalized_at", "_airbyte_renamed_dedup_cdc_excluded_hashid"
  from renamed_dedup_cdc_excluded__dbt_tmp
  
  