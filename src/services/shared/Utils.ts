import { randomUUID } from "crypto";
import { JsonError } from "./Validator"

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