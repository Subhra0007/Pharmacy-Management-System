import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true, 
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true, 
    },
    stock: {
      type: Number,
      required: true,
    },
    single: {
      type: Number,
      required: true,
    },
    priceFull: {
      type: Number,
      required: true,
    },
    priceSingle: {
      type: Number,
      required: true,
    },
    mfg: {
      type: Date,
      required: true,
    },
    exp: {
      type: Date,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
