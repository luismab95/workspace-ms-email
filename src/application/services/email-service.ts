import { EmailI } from "src/domain/entities/email";
import { sendEmail } from "src/infrastructure/adapters/nodemailer.service";
import { MAILER_OK } from "src/shared/constants/messages";

export class EmailService {
  async sendEmail(email: EmailI): Promise<string> {
    await sendEmail(email);
    return MAILER_OK;
  }
}
