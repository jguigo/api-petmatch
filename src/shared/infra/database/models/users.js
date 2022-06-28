const db = require("../index");
const { DataTypes } = require("sequelize");

const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contato: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numero_logradouro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    complemento: {
        type: DataTypes.STRING,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    uf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sobre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    permissao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    userStatus: {
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

module.exports = Users;
