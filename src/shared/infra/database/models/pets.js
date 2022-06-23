const db = require("../index");
const { DataTypes } = require("sequelize");

const Pets = db.define("pets", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true
	},
	especie: {
		type: DataTypes.STRING,
		allowNull: false
	},
	nome: {
		type: DataTypes.STRING,
		allowNull: false
	},
	idade: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	sexo: {
		type: DataTypes.STRING,
		allowNull: false
	},
	peso: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	tamanho: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	porte: {
		type: DataTypes.STRING,
		allowNull: false
	},
	chip: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	sobre: {
		type: DataTypes.STRING
	},
	userID: {
		type: DataTypes.UUID,
		allowNull: false
	},
	createdAt: {
		type: DataTypes.DATE
	},
	updatedAt: {
		type: DataTypes.DATE
	}
});

module.exports = Pets;
