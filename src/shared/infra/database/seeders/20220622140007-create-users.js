"use strict";

const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
    const pass = faker.random.alpha(10);
    const novaSenha = bcrypt.hashSync(pass, 10);
    seed.push({
        nome: faker.name.findName(),
        email: faker.internet.email(),
        cpf: faker.random.numeric(11, { allowLeadingZeros: false }),
        senha: novaSenha,
        contato: faker.random.numeric(8),
        cep: faker.random.numeric(8, { allowLeadingZeros: false }),
        logradouro: faker.address.street(),
        numero_logradouro: faker.random.numeric(3),
        complemento: faker.address.buildingNumber(),
        bairro: faker.name.findName(),
        cidade: faker.address.cityName(),
        uf: faker.address.state(),
        userStatus: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("users", seed);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("users", null, {});
    },
};
