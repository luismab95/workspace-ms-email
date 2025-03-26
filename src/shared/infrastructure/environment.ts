import dotenv from "dotenv";
dotenv.config();

export const config = {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV,
    crypto_data: process.env.CRYPTO_DATA,
    authUsername: process.env.AUTH_USERNAME,
    authPassword: process.env.AUTH_PASSWORD,
    msLogs: process.env.MS_LOGS,
    logsAuthUsername: process.env.LOGS_AUTH_USERNAME,
    logsAuthPassword: process.env.LOGS_AUTH_PASSWORD,
  },
};
