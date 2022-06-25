"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            senha: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contato: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cep: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            logradouro: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            numero_logradouro: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            complemento: {
                type: Sequelize.STRING,
            },
            bairro: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            uf: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            sobre: {
                type: Sequelize.STRING,
            },
            permissao: {
                type: Sequelize.INTEGER,
            },
            userStatus: {
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
        await queryInterface.dropTable("users");
    },
};
