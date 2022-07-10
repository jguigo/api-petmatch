"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("pets", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			especie: {
				type: Sequelize.STRING,
				allowNull: false
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false
			},
			idade: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			sexo: {
				type: Sequelize.STRING,
				allowNull: false
			},
			peso: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			tamanho: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			porte: {
				type: Sequelize.STRING,
				allowNull: false
			},
			cor: {
				type: Sequelize.STRING,
				allowNull: false
			},
			raca: {
				type: Sequelize.STRING,
				allowNull: false
			},
			castrado: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			vacinado: {
				type: Sequelize.BOOLEAN,
				allowNull: false
			},
			chip: {
				type: Sequelize.STRING,
				allowNull: true
			},
			sobre: {
				type: Sequelize.STRING,
				allowNull: false
			},
			petImage: {
				type: Sequelize.STRING,
				allowNull: false
			},
			userID: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: {
						tableName: "users"
					},
					key: "id"
				}
			},
			petStatus: {
				type: Sequelize.INTEGER,
				defaultValue: 1
			},
			createdAt: {
				type: Sequelize.DATE
			},
			updatedAt: {
				type: Sequelize.DATE
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("pets");
	}
};
