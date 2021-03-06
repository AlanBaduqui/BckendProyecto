const incidenciasCtrl = {};

const Incid = require("../models/incidencia");

incidenciasCtrl.getIncidencias = async (req, res) => {
  const incidens = await Incid.find();
  res.json(incidens);
};

incidenciasCtrl.createIncidencia = async (req, res) => {
  const { nombre, admi, problem, descri, date } = req.body;
  const newIncid = new Incid({
    nombre: nombre,
    admi: admi,
    problem: problem,
    descri: descri,
    date: date,
  });
  await newIncid.save();
  res.json({ messsenger: "Incidencia Guardad" });
};

incidenciasCtrl.getIncidencia = async (req, res) => {
  const incid = await Incid.findById(req.params.id);
  res.json(incid);
};

incidenciasCtrl.updateIncidencia = async (req, res) => {
    //aqui se actualiza el estado del reporte
    const { nombre, admi, problem, descri, } = req.body;
    await Incid.findOneAndUpdate({_id: req.params.id}, {
        nombre,
        admi,
        problem,
        descri

    });
    
    console.log(req.params.id);
    res.json({ messsenger: 'Incidencia Actualizada' });
};

incidenciasCtrl.deleteIncidencia = async (req, res) => {
  await Incid.findByIdAndDelete(req.params.id);
  res.json({ messsenger: "Incidencia Eliminada" });
};

module.exports = incidenciasCtrl;
