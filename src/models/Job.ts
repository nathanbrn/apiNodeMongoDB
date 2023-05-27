import { Schema, model } from 'mongoose';

export const Job = model('Job', new Schema({
  title: {
    type: String,
    required: true
  },
  hour: {
    type: String,
  },
  salary: {
    type: String,
  },
  exp: {
    type: String,
  },
  link: {
    type: String,
    required: true
  },
}));
