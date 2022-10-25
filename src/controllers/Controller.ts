import { Response as IRes, NextFunction as INext } from "express";
import autoBind from "auto-bind";
import httpStatus from "http-status";
import { Document } from "mongoose";

import Service from "../services/Service";
import pick from "../utils/pick";
import omit from "../utils/omit";
import ApiError from "../utils/ApiError";
import { RequestInterface as IReq } from "../types/global";

class Controller<IModel extends Document, MyService extends Service<IModel>> {
  service: MyService;
  constructor(service: MyService) {
    this.service = service;
    autoBind(this);
  }

  async getAll(req: IReq, res: IRes, next: INext): Promise<void> {
    try {
      const myService = this.service;
      const filter = omit(req.query, ["sort", "limit", "page"]);
      const options = pick(req.query, ["sort", "limit", "page"]);
      const result = await myService.getAll(filter, options);
      res.send(result);
    } catch (err: any) {
      next(new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  }

  async getAllWithPagination(req: IReq, res: IRes, next: INext): Promise<void> {
    try {
      const myService = this.service;
      const filter = omit(req.query, ["sort", "limit", "page"]);
      const options = pick(req.query, ["sort", "limit", "page"]);
      const result = await myService.getAllWithPagination(filter, options);
      res.send(result);
    } catch (err: any) {
      next(new ApiError(httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }
  }
}

export default Controller;
