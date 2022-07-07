"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("adocoes", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            statusAdocao: {
                type: Sequelize.INTEGER,
                defaultValue: 2,
            },
            pet_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "pets",
                    },
                    key: "id",
                },
            },
            ownerPet_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "users",
                    },
                    key: "id",
                },
            },
            adoptionUser_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "users",
                    },
                    key: "id",
                },
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("adocoes");
    },
};
