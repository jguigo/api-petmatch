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
    foreignKey: ["adoptionUser_id", "ownerPet_id"],
});

Adoption.belongsTo(Users, {
    foreignKey: ["adoptionUser_id", "ownerPet_id"],
});

Pets.hasMany(Adoption, {
    foreignKey: "pet_id",
});

Adoption.belongsTo(Pets, {
    foreignKey: "pet_id",
});

module.exports = {
    Users,
    Pets,
    Adoption,
};
