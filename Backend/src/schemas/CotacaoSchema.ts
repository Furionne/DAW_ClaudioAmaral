import mongoose from "mongoose";
import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";

const CotacaoSchema = new mongoose.Schema(
  {
    codCotacao: {type: String, required: true, unique: true},
    designation: { type: String, required: true },
    codCarteira: { type: String, required: true },
    value: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICotacaoPersistence & mongoose.Document>(
  "Cotacao",
  CotacaoSchema
);
