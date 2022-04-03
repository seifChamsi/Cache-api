import { Express, Request, Response } from "express";
import {
  createrCacheHanlder,
  getCacheHanlder,
} from "./controller/cache.controller";
import validateResource from "./middleware/validateResource";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/cache", createrCacheHanlder);
  app.get("/api/cache/:key", getCacheHanlder);
}

export default routes;
