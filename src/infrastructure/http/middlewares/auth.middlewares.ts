import { NextFunction, Request, Response } from "express";
import basicAuth from "basic-auth";
import { config } from "src/shared/infrastructure/environment";
import { ErrorResponse } from "src/shared/helpers/response-helper";
import { ERR_401 } from "src/shared/constants/messages";

const isValidUser = (username: string, password: string) => {
  const { authUsername, authPassword } = config.server;
  if (authUsername !== username || authPassword !== password) return false;
  return true;
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const credentials = basicAuth(req);
  if (!credentials || !isValidUser(credentials.name, credentials.pass)) {
    const error = new ErrorResponse(ERR_401, 401);
    return next(error);
  }
  return next();
};
