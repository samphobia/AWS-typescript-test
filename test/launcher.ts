import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-1";
process.env.TABLE_NAME = 'SpaceTable-06046a0a054c'

handler({
  httpMethod: 'POST',
  body: JSON.stringify({
    location: 'London'
  })
} as any, {} as any)