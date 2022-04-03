import { DocumentDefinition } from "mongoose";
import CacheModel, { CacheDocument } from "../models/cache.model";

export async function createCache(input: DocumentDefinition<CacheDocument>) {
  try {
    return await CacheModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}
