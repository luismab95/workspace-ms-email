import { NextFunction, Request, Response } from "express";
import { EmailI } from "src/domain/entities/email";
import { MAILER_OK } from "src/shared/constants/messages";
import { responseHelper } from "src/shared/helpers/response-helper";
import { ServiceContainer } from "src/shared/infrastructure/services-container";

export class EmailController {
  async sendEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const email = req.body as EmailI;
      await ServiceContainer.email.sendEmail(email);
      responseHelper(req, res, MAILER_OK);
    } catch (error) {
      next(error);
    }
  }
}
