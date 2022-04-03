import { Express, Request, Response } from "express";
import {
  createrCacheHanlder,
  deleteAllCachesHanlder,
  deleteCacheHanlder,
  getAllCacheHanlder,
  getCacheHanlder,
} from "./controller/cache.controller";
import validateResource from "./middleware/validateResource";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/cache", validateResource, createrCacheHanlder);
  app.get("/api/cache/:key", getCacheHanlder);
  app.get("/api/cache", getAllCacheHanlder);

  app.delete("/api/cache/:key", deleteCacheHanlder);
  app.delete("/api/cache", deleteAllCachesHanlder);
}

export default routes;
