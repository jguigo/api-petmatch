const Users = require("./users");
const Pets = require("./pets");

Users.hasMany(Pets, {
	foreignKey: "userID"
});

Pets.belongsTo(Users, {
	foreignKey: "userID"
});

module.exports = {
	Users,
	Pets
};
