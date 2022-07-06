"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("adocao", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            idUser: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "users",
                    },
                    key: "id",
                },
            },
            idPet: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: "pets",
                    },
                    key: "id",
                },
            },
            statusAdocao: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
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
        await queryInterface.dropTable("adocao");
    },
};
