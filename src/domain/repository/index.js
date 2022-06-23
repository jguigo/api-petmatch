const PetRepository = require("./PetRepository");
const UserRepository = require("./UserRepository");

const userRepository = new UserRepository();

const petRepository = new PetRepository();

module.exports = {
   userRepository,
   petRepository
};
