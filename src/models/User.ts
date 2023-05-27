import { Schema, model } from 'mongoose';

export const User = model('User', new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
}));