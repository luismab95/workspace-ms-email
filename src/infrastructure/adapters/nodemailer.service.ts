import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import { CryptoHelper } from "../../shared/helpers/crypto-helper";
import { config } from "src/shared/infrastructure/environment";
import { EmailInterface } from "src/domain/entities/email";

handlebars.registerHelper("eq", function (this: any, arg1: any, arg2: any) {
  return arg1 === arg2;
});

const { nodeEnv } = config.server;

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

const sendEmail = async (email: EmailInterface) => {
  const cryptoHelper = new CryptoHelper();
  const transporter = nodemailer.createTransport({
    service: email.mailerHost,
    port: email.mailerPort,
    secure: email.mailerSecure,
    auth: {
      user: email.mailerUser,
      pass: cryptoHelper.decryptedData(email.mailerPassword),
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
      from: email.mailerFrom,
      to: email.to,
      subject: email.subject,
      html: htmlToSend,
    });
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
};

export { sendEmail };
