import { Schema, model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

import { IFruit } from "../types";

const fruitsSchema: Schema = new Schema<IFruit>({
  name: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
    index: true,
  },
});

fruitsSchema.plugin(mongooseLeanVirtuals);

/**
 * @typedef Skill
 */
export default model<IFruit>("Fruit", fruitsSchema);
