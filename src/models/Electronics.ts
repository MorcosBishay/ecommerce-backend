import { Schema, model } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

import { IElectronics } from "../types";

const electronicsSchema: Schema = new Schema<IElectronics>({
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

electronicsSchema.plugin(mongooseLeanVirtuals);

/**
 * @typedef Skill
 */
export default model<IElectronics>("Electronics", electronicsSchema);
