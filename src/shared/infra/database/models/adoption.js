const db = require("../index");
const { DataTypes } = require("sequelize");

const Adoption = db.define("adocoes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    statusAdocao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2,
    },
    pet_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ownerPet_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adoptionUser_id: {
        type: DataTypes.STRING,
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
