const { Router } = require("express");
const router = Router();

const {
  getIncidencias,
  createIncidencia,
  getIncidencia,
  updateIncidencia,
  deleteIncidencia,
} = require("../controllers/incidencias.controller");

router.route("/").get(getIncidencias).post(createIncidencia);

router
  .route("/:id")
  .get(getIncidencia)
  .put(updateIncidencia)
  .delete(deleteIncidencia);

module.exports = router;