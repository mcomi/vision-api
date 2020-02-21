/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Proyecto = sequelize.define(
    "proyectos",
    {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      costo_total: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: "0.00"
      },
      utilidad: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: "0.00"
      },
      disponible: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: "0.00"
      }
    },
    {
      tableName: "proyectos"
    }
  );

  return Proyecto;
};
