"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
    seed.push({
        especie: "cachorro",
        nome: faker.name.findName(),
        idade: faker.random.numeric(2),
        sexo: "macho",
        peso: faker.random.numeric(2),
        tamanho: faker.random.numeric(2),
        porte: "medio",
        cor: faker.lorem.word(1),
        raca: faker.animal.dog(),
        castrado: faker.datatype.boolean(),
        vacinado: faker.datatype.boolean(),
        chip: 0,
        sobre: faker.lorem.word(10),
        petImage: faker.lorem.word(1),
        userID: faker.random.numeric(1, { bannedDigits: ["0"] }),
        petStatus: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("pets", seed);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("pets", null, {});
    },
};
