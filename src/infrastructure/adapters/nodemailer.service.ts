import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { config } from "src/shared/infrastructure/environment";
import { EmailI } from "src/domain/entities/email";
import { ErrorResponse } from "src/shared/helpers/response-helper";
import { CodeHttpEnum } from "src/shared/enums/http-code";

handlebars.registerHelper("eq", function (this: any, arg1: any, arg2: any) {
  return arg1 === arg2;
});

const {
  nodeEnv,
  mailFrom,
  mailName,
  mailPort,
  mailUser,
  mailHost,
  mailPassword,
} = config.server;

const readHTMLFile = (path: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
};

const sendEmail = async (email: EmailI) => {
  const transporter = nodemailer.createTransport({
    service: mailHost,
    secure: nodeEnv !== "dev",
    requireTLS: nodeEnv !== "dev",
    port: mailPort,
    auth: {
      user: mailUser,
      pass: mailPassword,
    },
  });
  try {
    const html =
      nodeEnv === "dev"
        ? await readHTMLFile(`templates/${email.templateName}.hbs`)
        : await readHTMLFile(`dist/templates/${email.templateName}.hbs`);
    const template = handlebars.compile(html);
    const htmlToSend = template(email.context);

    await transporter.sendMail({
      from: `"${mailName}" <${mailFrom}>`,
      to: email.to,
      subject: email.subject,
      html: htmlToSend,
    });
  } catch (error) {
    throw new ErrorResponse(error.message, CodeHttpEnum.badGateway);
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
};

export { sendEmail };
