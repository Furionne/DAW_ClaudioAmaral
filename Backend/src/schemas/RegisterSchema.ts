import { Schema } from "express-validator";

export const registerSchema: Schema = {
  name: {
    trim: true,
    in: ["body"],
    isLength: {
      options: { min: 1 },
      errorMessage: "Name is required",
    },
  },
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
      options: { min: 4 },
      errorMessage: "Password must be at least 4 characters",
    },
  },

  confirmPassword: {
    in: ["body"],
    trim: true,
    custom: {
      options: (value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password confirmation does not match password");
        }
        return true;
      },
    },
  },
};
