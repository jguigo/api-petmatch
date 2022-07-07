const db = require("../index");
const { DataTypes } = require("sequelize");

const Adoption = db.define("adocoes", {
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
        defaultValue: 1,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
});

module.exports = Adoption;
