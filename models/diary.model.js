const { DataTypes } = require("sequelize");

module.exports = (sequalize, Sequalize) => {
  const Diary = sequalize.define(
    "diary",
    {
      id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
    },
    { timestamps: true }
  );
  return Diary;
};
