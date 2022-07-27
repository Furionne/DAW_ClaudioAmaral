import mongoose from "mongoose";
import ICarteiraPersistence from "../dataschema/ICarteiraPersistence";

const CarteiraSchema = new mongoose.Schema(
  {
    codCarteira: {type: String, required: true, unique: true},
    designation: { type: String, required: true },
    codTitulo: { type: String, required: true, unique: true },
    codCotacao: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICarteiraPersistence & mongoose.Document>(
  "Carteira",
  CarteiraSchema
);
