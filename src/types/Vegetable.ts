import { Document } from "mongoose";

export interface IVegetable extends Document {
  name: string;
  price: number;
}
