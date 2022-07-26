import mongoose from "mongoose";
import ICotacaoPersistence from "../dataschema/ICotacaoPersistence";

const CotacaoSchema = new mongoose.Schema(
  {
    codigo: {
      type: String,
      minLength: 3,
      maxLength: 3,
      required: true,
      unique: true,
    },
    zona: { type: String, minLength: 3, maxLength: 4, required: true },
    dataNota: { type: Date, required: true },
    validadeNota: { type: Number, required: true },
    descricao: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICotacaoPersistence & mongoose.Document>(
  "Cotacao",
  CotacaoSchema
);
