import express from "express";
import morgan from "morgan";

import environmentConfig from "./config"
import router from "./routes/index.route";

import { errorHandlerMiddleware } from "./middlewares/error_handler.middleware.js";

const app = express();

const main = () => {
  //handleError (middleware)
  app.use(errorHandlerMiddleware);

  //logger http
  app.use(morgan("dev"));

  //routes
  app.use("/api", router);

  app.listen(environmentConfig.PORT, () => {
    console.log(
      `Servidor encendido en el puerto ${environmentConfig.PORT} 🔥🚀👽`
    );
  });
};

main();
