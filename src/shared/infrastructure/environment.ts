import dotenv from "dotenv";
dotenv.config();

export const config = {
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV,
    authUsername: process.env.AUTH_USERNAME,
    authPassword: process.env.AUTH_PASSWORD,
    mailHost: process.env.MAIL_HOST,
    mailUser: process.env.MAIL_USER,
    mailName: process.env.MAIL_NAME,
    mailFrom: process.env.MAIL_FROM,
    mailPort: Number(process.env.MAIL_PORT),
    mailPassword: process.env.MAIL_PASSWORD,
  },
};
