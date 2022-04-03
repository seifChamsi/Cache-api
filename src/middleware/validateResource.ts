import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import CacheModel from "../models/cache.model";

const validateResource =
  (key: string) => (req: Request, res: Response, next: NextFunction) => {
    let cacheToFind = CacheModel.find({
      key: `${req.body.key}`,
    });

    if (cacheToFind != null) {
      return res.json({ message: "the key must be unique" });
    } else {
      next();
    }
  };
export default validateResource;
