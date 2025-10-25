import mongoose from "mongoose";

const { Schema, model } = mongoose;

const departamentoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    slogan: { type: String, required: false }
  },
  { timestamps: true }
);

export default model("Departamento", departamentoSchema);
