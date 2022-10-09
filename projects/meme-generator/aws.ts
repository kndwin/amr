// Create service client module using ES6 syntax.
import { S3Client } from "@aws-sdk/client-s3";
// Set the AWS Region.
const REGION = "us-east-1";
// Create an Amazon S3 service client object.

// AWS_ACCESS_KEY_ID
// AWS_SECRET_ACCESS_KEY
// Secrets are loaded automaticcaly (manual loading breaks it)
// Don't know why
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html

export const s3Client = new S3Client({
  region: REGION,
});
