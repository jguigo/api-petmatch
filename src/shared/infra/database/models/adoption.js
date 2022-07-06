const db = require("../index");
const { DataTypes } = require("sequelize");

const Adoption = db.define("pets", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    idUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idPet: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    statusAdocao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
});

module.exports = Adoption;
