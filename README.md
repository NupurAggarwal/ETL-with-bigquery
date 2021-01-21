# ETL-with-bigquery

This is created to understand how we can extract ,transform and load data in bigquery using dataflow pipeline in GCP.

Google Cloud Dataflow is a serverless data processing service that enables developers to build transformation pipelines without the need of deploying or managing the resources. GCP allows developers to create a dataflow job via inbuilt templates or a custom code joining multiple tables.
Prerequisite:
1.GCP account
2.Enabled billing in GCP
3.Bucket in google cloud storage
4.A dataset in bigquery under project id

Steps to Stream Data from Dataflow to BigQuery:
1.Upload Schema.json,covid_data.txt and transform.js file to your google cloud storage bucket.
2.Go to dataflow console at https://console.cloud.google.com/dataflow . Click on the create “a job from template” option and fill in the required details.Select "Text files on Cloud Storage to BigQuery" as the dataflow template from the drop down.
3.After filling in the dataflow job details,hit run.
4.On the successful completion of the job,check result table in bigquery UI.

More details available at :https://www.linkedin.com/pulse/etl-bigquery-nupur-aggarwal
