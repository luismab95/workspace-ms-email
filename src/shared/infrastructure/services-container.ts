import { EmailService } from "src/application/services/email-service";

export const ServiceContainer = {
  email: new EmailService(),
};
