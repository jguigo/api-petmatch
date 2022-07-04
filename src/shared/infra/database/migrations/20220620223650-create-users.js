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
                unique: true,
            },
            senha: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            contato: {
                type: Sequelize.STRING,
            },
            cep: {
                type: Sequelize.STRING,
            },
            logradouro: {
                type: Sequelize.STRING,
            },
            numero_logradouro: {
                type: Sequelize.STRING,
            },
            complemento: {
                type: Sequelize.STRING,
            },
            bairro: {
                type: Sequelize.STRING,
            },
            cidade: {
                type: Sequelize.STRING,
            },
            uf: {
                type: Sequelize.STRING,
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
