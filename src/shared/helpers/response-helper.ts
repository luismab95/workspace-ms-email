import colors from "colors";
import { NextFunction, Request, Response } from "express";
import { OK_200 } from "../constants/messages";
import { ServiceResponseI } from "../interfaces/response.interface";

export class ErrorResponse extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const responseHelper = (_req: Request, res: Response, data: unknown) => {
  const response: ServiceResponseI = { data, message: OK_200 };
  res.json(response);
};

export const errorHandler = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(colors.red.bold(error.stack));

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  const response: ServiceResponseI = { data: null, message };
  res.status(statusCode).json(response);
};
