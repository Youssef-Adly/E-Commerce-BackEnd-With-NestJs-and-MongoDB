import * as mongoose from 'mongoose';

export const OrdersSchema = new mongoose.Schema({
  _id: Number,
  userID: Number,
  orderID: Number,
  products: [Number],
  totalPrice: Number,
});
