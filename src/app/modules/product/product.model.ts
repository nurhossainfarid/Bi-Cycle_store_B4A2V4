import { model, Schema } from 'mongoose'
import { TProduct } from './product.interface'

// product schema
const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required.'], // Custom error message
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Product brand is required.'], // Custom error message
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required.'], // Custom error message
      min: [0, 'Price must be a positive number.'], // Custom error message for invalid price
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message:
          'Type must be one of Mountain, Road, Hybrid, BMX, or Electric.', // Custom enum error message
      },
      required: [true, 'Product type is required.'], // Custom error message
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Product quantity is required.'], // Custom error message
      min: [0, 'Quantity must be a non-negative number.'], // Custom error message for invalid quantity
    },
    inStock: {
      type: Boolean,
      required: [true, 'Stock status is required.'], // Custom error message
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
)

// Creating the Mongoose model
export const ProductModel = model('Product', productSchema)
