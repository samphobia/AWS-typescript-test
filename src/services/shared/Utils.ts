import { randomUUID } from "crypto";
import { JsonError } from "./Validator"
import { APIGatewayProxyEvent } from "aws-lambda";

export function createRandomId(){
  return randomUUID();
}

export function parseJSON(args: string) {
  try {
    return JSON.parse(args)
  } catch (error) {
    throw new JsonError(error.message)
  }
}

export function hasAdminGroup(event: APIGatewayProxyEvent) {
  const groups = event.requestContext.authorizer?.claims['cognito:groups'];
  if (groups) {
    return (groups as string).includes('admins');
  }
  return false;
}