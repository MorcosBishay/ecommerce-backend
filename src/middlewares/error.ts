import httpStatus from "http-status";
import { NextFunction, Response } from "express";

import { RequestInterface } from "../types/global";
import logger from "../config/logger";
import ApiError from "../utils/ApiError";

// eslint-disable-next-line no-unused-vars
const errorHandler = (
  err: any,
  req: RequestInterface,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    if (error.name === "UnauthorizedError") {
      error = new ApiError(
        httpStatus.UNAUTHORIZED,
        error.message,
        {},
        err.stack
      );
    } else {
      const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || httpStatus[statusCode];
      error = new ApiError(statusCode, message, {}, err.stack);
    }
  }
  let { statusCode, message } = error;

  const devStages = ["development", "testing"];

  res.locals.errorMessage = err.message;
  const response = {
    code: statusCode,
    message,
    ...{ stack: err.stack },
  };

  logger.error(err);
  res.status(statusCode).send(response);
};

export default errorHandler;
