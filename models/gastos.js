/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Gasto = sequelize.define(
    "gastos",
    {
      id_gasto: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_proyecto: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        references: {
          model: "proyectos",
          key: "id"
        }
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "users",
          key: "username"
        }
      },
      monto: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      }
    },
    {
      tableName: "gastos"
    }
  );

  return Gasto;
};
