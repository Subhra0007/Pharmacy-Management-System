//models/Customer.js
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  inClinic: Boolean,
});

const orderFrequencySchema = new mongoose.Schema({
  month: String,
  orders: Number,
});

const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  isSingle: Boolean,
  isFull: Boolean,
  singleQuantity: Number,
  fullMultiplier: Number,
});

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: String,
    balance: String,
    address: String,
    doctors: [doctorSchema],
    orderFrequency: [orderFrequencySchema],
    products: [productSchema],
    deliveryMethod: String,
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);