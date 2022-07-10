const { petRepository } = require("../../repository/index");
const { uploads } = require("../../../config/cloudinary");
const fs = require("fs");

class CreatePetUseCase {
    async create(data) {
        const objPet = data.body;
        const uploadedImage = data.file;

        const linkImage = await uploads(uploadedImage.path, "petsImage");

        fs.unlinkSync(uploadedImage.path);

        Object.assign(objPet, {
            userID: data.auth.id,
            petImage: linkImage.imageUrl,
        });

        const newPet = await petRepository.create(objPet);

        return newPet;
    }
}

module.exports = CreatePetUseCase;
