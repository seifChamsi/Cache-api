import { DocumentDefinition } from "mongoose";
import CacheModel, { CacheDocument } from "../models/cache.model";
import logger from "../utils/logger";
import generateString from "../utils/genrateValue";
import lodash from "lodash";

//EXPLANATION : i searched for Cache replacement policies and i
///decided to use Least recently used (LRU) who had the concept of discarding the
/// last used item within a sequence and put the new record in its place.
/// Please follow the link for more infos : https://en.wikipedia.org/wiki/Cache_replacement_policies#First_in_first_out_(FIFO)
export async function createCache(input: DocumentDefinition<CacheDocument>) {
  try {
    const Cachs = await getAllCaches();

    if (Cachs != null && Cachs.length >= 10) {
      const cacheRecord = await CacheModel.find({}).sort({ ttl: -1 }).limit(1);
      CacheModel.deleteOne({ _id: cacheRecord[0]._id });
      console.log("cache deleted");
    }
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
    let ttlToupdate = new Date();
    //refresh ttl
    ttlToupdate.setMinutes(ttlToupdate.getMinutes() + 5);
    cacheBykey.ttl = ttlToupdate;
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

export async function getAllCaches() {
  try {
    const cachs = await CacheModel.find({});

    return cachs;
  } catch (error) {
    logger.error(error);
  }
}

export async function deleteCacheByKey(givenKey: string) {
  try {
    const cachs = await CacheModel.findOneAndDelete({ key: `${givenKey}` });

    return cachs;
  } catch (error) {
    logger.error(error);
  }
}

export async function deleteAllCaches() {
  try {
    const cachs = await CacheModel.deleteMany({});

    return cachs;
  } catch (error) {
    logger.error(error);
  }
}
