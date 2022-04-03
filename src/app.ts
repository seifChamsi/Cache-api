import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
var bodyParser = require("body-parser");

const port = config.get<number>("port");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(port, () => {
  logger.info(
    `[+]The server is running on the server : http://localhost:${port}`
  );
  //Connect to the database
  connect();

  //Enabling our routes
  routes(app);
});
