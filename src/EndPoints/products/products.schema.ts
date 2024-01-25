import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  productID: Number,
  name: String,
  price: Number,
  description: String,
});
