const { petRepository } = require("../../repository/index");
const { uploads } = require("../../../config/cloudinary");

class CreatePetUseCase {
    async create(data) {
        const objPet = data.body;
        const uploadedImage = data.files[0];

        const linkImage = await uploads(uploadedImage, petsImage);

        console.log(linkImage);

        Object.assign(objPet, {
            userID: data.auth.id,
            petImage: linkImage.imageUrl
        });

        const newPet = await petRepository.create(objPet);

        return newPet;
    }
    
}

module.exports = CreatePetUseCase;