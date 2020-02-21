const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/users.js")(sequelize, Sequelize);
db.proyecto = require("../models/proyectos.js")(sequelize, Sequelize);
db.gasto = require("../models/gastos")(sequelize, Sequelize);
db.pago = require("../models/pagos.js")(sequelize, Sequelize);

//Relations
db.gasto.belongsTo(db.proyecto, { foreignKey: "id_proyecto" });
db.pago.belongsTo(db.proyecto, { foreignKey: "id_proyecto" });
db.proyecto.hasMany(db.gasto, { foreignKey: "id_proyecto" });
db.proyecto.hasMany(db.pago, { foreignKey: "id_proyecto" });

module.exports = db;
