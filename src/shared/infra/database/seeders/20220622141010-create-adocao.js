"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
    seed.push({
        idUser: faker.random.numeric(1, { bannedDigits: ["0"] }),
        idPet: faker.random.numeric(1, { bannedDigits: ["0"] }),
        statusAdocao: 1,
    });
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("adocao", seed);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("adocao", null, {});
    },
};
