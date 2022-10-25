import { ObjectSchema } from 'joi';

export interface IJoiSchema {
  body?: ObjectSchema;
  params?: ObjectSchema;
  query?: ObjectSchema;
}
