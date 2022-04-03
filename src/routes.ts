import { Express, Request, Response } from "express";
import { CreateCacheHanlder } from "./controller/cache.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/cache", CreateCacheHanlder);
}

export default routes;
