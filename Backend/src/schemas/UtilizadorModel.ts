import { model, Schema } from "mongoose";
import { IUtilizadorPersistance } from "../dataschema/IUtilizadorPersistence";

const utilizador = new Schema<IUtilizadorPersistance>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UtilizadorModel = model("Utilizador", utilizador);
