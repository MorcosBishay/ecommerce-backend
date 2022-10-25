import { Document } from "mongoose";

export interface IFruit extends Document {
  name: string;
  price: number;
}
