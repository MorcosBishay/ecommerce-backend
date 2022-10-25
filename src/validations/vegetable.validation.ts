import Joi from "joi";

import { IJoiSchema } from "../types/joi.interface";

const getVegetablesWithPagination: IJoiSchema = {
  query: Joi.object().keys({
    sort: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export default getVegetablesWithPagination;
