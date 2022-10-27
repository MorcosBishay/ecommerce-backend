import { Document } from 'mongoose';

export interface IElectronics extends Document {
  name: string;
  price: number;
}
