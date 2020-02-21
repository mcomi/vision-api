/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const Pago = sequelize.define(
    "pagos",
    {
      id_pago: {
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
      tipo_pago: {
        type: DataTypes.INTEGER(1),
        allowNull: false
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
      tableName: "pagos"
    }
  );

  return Pago;
};
