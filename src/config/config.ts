import path from "path";

import * as dotenv from "dotenv";
import Joi from "joi";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema: Joi.AnySchema = Joi.object()
  .keys({
    PORT: Joi.number().required().default(8000),
    MONGODB_URL: Joi.string().required().description("Mongo DB Production url"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

export const config = {
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};
