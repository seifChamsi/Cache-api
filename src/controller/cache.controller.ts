import { Request, Response } from "express";
import { createCache, getCacheByKey } from "../service/cache.service";
import logger from "../utils/logger";

export async function createrCacheHanlder(req: Request, res: Response) {
  try {
    const Cache = await createCache(req.body);
    return res.json({
      status: 201,
      data: Cache,
    });
  } catch (error) {
    logger.error(error);
    return res.status(409);
  }
}

export async function getCacheHanlder(req: Request, res: Response) {
  try {
    let key = req.params.key;
    const Cache = await getCacheByKey(key);
    return res.json({
      status: 200,
      data: Cache,
    });
  } catch (error) {
    logger.error(error);
    return res.status(409);
  }
}
