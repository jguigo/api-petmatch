const Users = require("./users");
const Pets = require("./pets");
const Adocao = require("./adocao");

Users.hasMany(PeAts, {
    foreignKey: "userID",
});

Pets.belongsTo(Users, {
    foreignKey: "userID",
});

Users.hasMany(Adocao, {
    foreignKey: "idUser",
});

Adocao.belongsTo(Users, {
    foreignKey: "idUser",
});

Pets.hasMany(Adocao, {
    foreignKey: "idPets",
});

Adocao.belongsTo(Pets, {
    foreignKey: "idPets",
});

module.exports = {
    Users,
    Pets,
};
