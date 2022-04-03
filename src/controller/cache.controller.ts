import { Request, Response } from "express";
import { createCache } from "../service/cache.service";
import logger from "../utils/logger";

export async function CreateCacheHanlder(req: Request, res: Response) {
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
