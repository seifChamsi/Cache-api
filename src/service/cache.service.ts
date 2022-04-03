import { DocumentDefinition } from "mongoose";
import CacheModel, { CacheDocument } from "../models/cache.model";
import logger from "../utils/logger";
import generateString from "../utils/genrateValue";
export async function createCache(input: DocumentDefinition<CacheDocument>) {
  try {
    input.value = generateString(10);
    return await CacheModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getCacheByKey(givenKey: string) {
  const cacheBykey = await CacheModel.findOne({
    key: `${givenKey}`,
  });
  if (cacheBykey != null) {
    logger.info("Cache hit");
    return cacheBykey;
  } else {
    logger.info("Cache miss");
    const value = generateString(10);
    const updatedCache = await CacheModel.create({
      key: `${givenKey}`,
      value: value,
    });

    return updatedCache.value;
  }
}
