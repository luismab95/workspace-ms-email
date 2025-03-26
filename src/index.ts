import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import { OK_200 } from "./shared/constants/messages";
import emailRoutes from "./infrastructure/http/routes/email-routes";
import colors from "colors";
import { config } from "./shared/infrastructure/environment";
import { errorHandler } from "./shared/helpers/response-helper";

const startServer = async () => {
  const { port, host, nodeEnv } = config.server;
  const routePrefix = "ms-email";
  const corsOptions = {
    origin: "",
  };

  const app = express();

  app.disable("x-powered-by");
  app.use(express.json());
  app.use(cors(corsOptions));

  app.get(`/${routePrefix}`, async (_req: Request, res: Response) => {
    res.status(200).json({
      data: "Welcome, but nothing to show here",
      message: OK_200,
    });
  });
  app.use(`/${routePrefix}/send`, emailRoutes);

  if (nodeEnv === "dev")
    app.use(
      `/${routePrefix}/api-docs`,
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec)
    );

  app.use(errorHandler);

  app.listen(port, host, () => {
    console.info(colors.bold.green(`MS-SECURITY iniciado en ${host}:${port}`));
  });
};

startServer();
