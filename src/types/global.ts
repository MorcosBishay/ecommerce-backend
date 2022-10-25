import { Request } from "express";
import {
  Aggregate,
  Document,
  ObjectId,
  ConnectOptions,
  PopulateOptions,
} from "mongoose";

export interface RequestInterface extends Request {
  body: any;
  headers: any;
}

export interface ConnectOptionsInterface extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

export interface ServiceDocument extends Document {
  _id: ObjectId;
}

export interface Documents<IModel> {
  pages?: number;
  documents: IModel[];
  count?: number;
  nextPage?: number | null;
}

export interface ServiceOptions {
  page?: number;
  populate?: PopulateOptions | (string | PopulateOptions)[] | any;
  select?: string | object;
  sort?: any;
  skip?: number;
  limit?: number;
  addFields?: object;
  lookup?: object;
  match?: object;
  project?: object;
  count?: number;
  new?: boolean;
}
