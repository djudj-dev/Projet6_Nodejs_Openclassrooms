import { Schema } from "mongoose";

const SauceSchema = new Schema ({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
  },
  description: {
    type: String,
  },
  mainPepper: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true
  },
  heat: {
    type: Number,
  },
  likes: {
    type: Number,
    required: true
  },
  dislikes: {
    type: Number,
    required: true
  },
  usersLiked: {
    type: [String],
    required: true
  },
  usersDisliked: {
    type: [String],
    required: true
  }
});

export const SauceModelObject = {
  name: 'Sauce',
  schema: SauceSchema
}