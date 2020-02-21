/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      }
    },
    {
      tableName: "users"
    }
  );

  return User;
};
