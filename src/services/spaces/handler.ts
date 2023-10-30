import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";


async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  let message: string

  switch (event.httpMethod) {
    case 'GET':
      message = 'Hello from Get'
      break;
    case 'POST':
      message = 'Hello from Post'
      break;
  
    default:
      break;
  }

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message)
  }

  return response
}

export { handler }