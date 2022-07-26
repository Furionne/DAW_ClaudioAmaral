import mongoose from "mongoose";
import ITituloPersistence from "../dataschema/ITituloPersistence";

const TituloSchema = new mongoose.Schema(
  {
    codTitulo: {type: String, required: true, unique: true,},
    designacao: { type: String, required: true },
    codCarteira: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITituloPersistence & mongoose.Document>(
  "Titulo",
  TituloSchema
);
