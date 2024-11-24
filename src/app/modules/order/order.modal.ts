import { model, Schema } from "mongoose";
import { TProduct } from "./order.interface";

// product schema
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  type: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Creating the Mongoose model
export const ProductModel = model('Product', productSchema);

