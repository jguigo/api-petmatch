const Users = require("./users");
const Pets = require("./pets");
const Adoption = require("./adoption");

Users.hasMany(Pets, {
    foreignKey: "userID",
});

Pets.belongsTo(Users, {
    foreignKey: "userID",
});

Users.hasMany(Adoption, {
    foreignKey: "idUser",
});

Adoption.belongsTo(Users, {
    foreignKey: "idUser",
});

Pets.hasMany(Adoption, {
    foreignKey: "idPets",
});

Adoption.belongsTo(Pets, {
    foreignKey: "idPets",
});

module.exports = {
    Users,
    Pets,
    Adoption,
};
