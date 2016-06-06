import mongoose from 'mongoose';
const { Schema } = mongoose;

const Model = new Schema({
  name: { type: String, required: true },
  image_uuid: { type: String },
  price: { type: Number, min: 0, required: true },
  updated: { type: Date, default: Date.now },
}, { versionKey: false });

export default mongoose.model('Products', Model);
