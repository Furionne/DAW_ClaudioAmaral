import { Schema } from "express-validator";

export const loginSchema: Schema = {
  email: {
    in: ["body"],
    trim: true,
    isEmail: {
      errorMessage: "Email is invalid",
    },
  },
  password: {
    in: ["body"],
    trim: true,
    isLength: {
      options: { min: 1 },
      errorMessage: "Password must be at least 1 character",
    },
  },
};
