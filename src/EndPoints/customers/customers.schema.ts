import * as mongoose from 'mongoose';

export const CustomersSchema = new mongoose.Schema({
  userID: Number,
  name: String,
  age: Number,
  email: String,
});
