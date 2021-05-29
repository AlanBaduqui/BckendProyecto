const { Schema, model } = require("mongoose");

const incidenciaSchema = new Schema(
  {
    nombre: String,
    admi: String,
    problem: String,
    descri: String
  },
  {
    timestamps: true,
  }
);

module.exports = model("Incidencia", incidenciaSchema);
