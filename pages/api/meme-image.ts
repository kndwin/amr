// Import required AWS SDK clients and commands for Node.js.
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "projects/meme-generator/aws"; // Helper function that creates an Amazon S3 service client module.
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await s3Client.send(
    new ListObjectsCommand({ Bucket: "imagesapitest" })
  );
  const images = data?.Contents?.map(
    ({ Key }) => `https://imagesapitest.s3.amazonaws.com/${Key}`
  );

  res.status(200).json({
    images,
  });
}
