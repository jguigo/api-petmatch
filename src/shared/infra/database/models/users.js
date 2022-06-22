const db = require("../index");
const { DataTypes } = require("sequelize");

const Users = db.define("users", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cpf: {
		type: DataTypes.STRING,
		allowNull: false
	},
	senha: {
		type: DataTypes.STRING,
		allowNull: false
	},
	contato: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	cep: {
		type: DataTypes.STRING,
		allowNull: false
	},
	logradouro: {
		type: DataTypes.STRING,
		allowNull: false
	},
	numero_logradouro: {
		type: DataTypes.STRING,
		allowNull: false
	},
	complemento: {
		type: DataTypes.STRING
	},
	bairro: {
		type: DataTypes.STRING,
		allowNull: false
	},
	cidade: {
		type: DataTypes.STRING,
		allowNull: false
	},
	uf: {
		type: DataTypes.STRING,
		allowNull: false
	},
	createdAt: {
		type: DataTypes.DATE
	},
	updatedAt: {
		type: DataTypes.DATE
	}
});

module.exports = Users;
