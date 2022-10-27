import { Schema, model } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';

import { IVegetable } from '../types';

const vegetablesSchema: Schema = new Schema<IVegetable>({
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

vegetablesSchema.plugin(mongooseLeanVirtuals);

/**
 * @typedef Skill
 */
export default model<IVegetable>('Vegetable', vegetablesSchema);
