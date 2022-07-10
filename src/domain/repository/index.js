const PetRepository = require("./PetRepository");
const UserRepository = require("./UserRepository");
const AdoptionRepository = require("./AdoptionRepository");

const userRepository = new UserRepository();
const petRepository = new PetRepository();
const adoptionRepository = new AdoptionRepository();

module.exports = {
    userRepository,
    petRepository,
    adoptionRepository,
};
