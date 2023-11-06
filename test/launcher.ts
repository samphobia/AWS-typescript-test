import { handler } from "../src/services/spaces/handler";

process.env.AWS_REGION = "eu-west-2";
process.env.TABLE_NAME = 'SpaceTable-06046a0a054c'

handler({
  httpMethod: 'GET',
  queryStringParameters: {
    id: 'bf931049-6d1c-4d3a-8c69-4852d2c8a50c'
  },
  // body: JSON.stringify({
  //   location: 'London updated'
  // })
} as any, {} as any)