const db = require("../index");
const { DataTypes } = require("sequelize");

const Pets = db.define("pets", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    especie: {
        type: DataTypes.ENUM("Cachorro", "Gato", "Ave", "Réptil", "Peixe"),
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.ENUM("Macho", "Fêmea"),
        allowNull: false,
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tamanho: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    porte: {
        type: DataTypes.ENUM("Pequeno", "Médio", "Grande"),
        allowNull: false,
    },
    cor: {
        type: DataTypes.ENUM("Escuro", "claro", "Misto", "Caramelo"),
        allowNull: false
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    castrado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    vacinado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    chip: {
        type: DataTypes.STRING,
    },
    sobre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    petImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    petStatus: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
});

module.exports = Pets;
