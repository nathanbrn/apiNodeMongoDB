import { Schema, model } from 'mongoose';

export const Job = model('Job', new Schema({
  title: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true,
  },
  enterprice: {
    type: String,
  },
  type: {
    type: String,
  },
  hour: {
    type: String,
  },
  salary: {
    type: String,
  },
  location: {
    type: String,
    required: true,

  },
  description: {
    type: String,
  },
  requirements: {
    type: String,
    required: true,

  },
  differentials: {
    type: String,
  },
  benefits: {
    type: String,
  },
  url: {
    type: String,
    required: true
  },
  star: {
    type: Boolean,
  }
}));
