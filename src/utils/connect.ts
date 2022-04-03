import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

function connect() {
  const dbUri = config.get<string>("dbUri");
  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info("[+] You are connected to Db sucessfully");
    })
    .catch((err) => {
      logger.error("Could Not connect to db" + err);
      process.exit(1);
    });
}

export default connect;
