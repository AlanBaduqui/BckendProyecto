const express = require("express");
const cors = require("cors");
const app = express();

//Setings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/incidencias', require('./routes/incidencias'));

//Ruta de login
app.use('/users',require('./routes/users'));


module.exports = app;
