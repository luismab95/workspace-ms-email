import { config } from "./shared/infrastructure/environment";
import { errorHandler } from "./shared/helpers/response-helper";
import { OK_200 } from "./shared/constants/messages";
import colors from "colors";
import cors from "cors";
import emailRoutes from "./infrastructure/http/routes/email-routes";
import express, { Request, Response } from "express";
import swaggerSpec from "./swagger";
import swaggerUi from "swagger-ui-express";

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
    console.info(colors.bold.green(`MS-EMAIL iniciado en ${host}:${port}`));
  });
};

startServer();
