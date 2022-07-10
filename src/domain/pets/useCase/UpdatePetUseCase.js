const { petRepository } = require("../../repository/index");
const uploads = require("../../../config/cloudinary");
const fs = require("fs");

class UpdatePetUseCase {
    async update(data) {
        const petId = data.params.id;
        const userId = data.auth.id;
        const objPet = data.body;
        const uploadedImage = data.file;

        const petById = await petRepository.findOne(petId);

        if (!petById) {
            return new Error("Nenhum pet cadastrado com este ID!");
        }

        if (!userId == petById.userID) {
            return new Error("Sem autorização!");
        }

        if (uploadedImage) {
            const linkImage = await uploads(uploadedImage.path, "petsImage");

            fs.unlinkSync(uploadedImage.path);

            Object.assign(objPet, {
                petImage: linkImage.imageUrl,
            });
        }

        await petRepository.update(petId, objPet);

        const updatedPet = await petRepository.findOne(petId);

        return updatedPet;
    }
}

module.exports = UpdatePetUseCase;
