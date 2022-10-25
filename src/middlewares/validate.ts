import Joi from "joi";
import httpStatus from "http-status";
import { Response, NextFunction } from "express";

import { IJoiSchema } from "../types/joi.interface";
import pick from "../utils/pick";
import ApiError from "../utils/ApiError";
import typify from "../utils/typify";
import { RequestInterface } from "../types/global";

const validate =
  (schema: IJoiSchema) =>
  (req: RequestInterface, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ["params", "query", "body"]);
    const object: { body?: object } = pick(req, Object.keys(validSchema));
    if (object.body) object.body = typify(object.body);
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" } })
      .validate(object);
    if (error) {
      const errorMessage = error.details[0].message;
      return next(new ApiError(httpStatus.UNPROCESSABLE_ENTITY, errorMessage));
    }
    Object.assign(req, value);
    return next();
  };

export default validate;
