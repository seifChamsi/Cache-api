import { Request, Response } from "express";
import CacheModel from "../models/cache.model";
import {
  createCache,
  getAllCaches,
  getCacheByKey,
} from "../service/cache.service";
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

export async function getAllCacheHanlder(req: Request, res: Response) {
  try {
    let key = req.params.key;
    const Cachs = await getAllCaches();
    return res.json({
      status: 200,
      count: Cachs?.length,
      data: { Cachs },
    });
  } catch (error) {
    logger.error(error);
    return res.status(409);
  }
}
