const express = require("express");
const app = express();

const projectsApi = require("./routes/proyectos");

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type,Accept,access-token,X-Key"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// routes
projectsApi(app);

// HACER SYNC CON LA BD
const db = require("./config/db.config.js");

const Proyecto = db.proyecto;
const User = db.user;

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  //  inicializar la base con algunos registros
  //initialize()
});

// Create a Server
var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

function initialize() {
  User.create({
    username: "mcomix",
    firstname: "Manuel",
    lastname: "Comi",
    email: "manuel@mail.com"
  });

  Proyecto.create({
    nombre: "Proyecto 1"
  });

  Proyecto.create({
    nombre: "Proyecto 2"
  });

  Proyecto.create({
    nombre: "Proyecto 3"
  });
}
