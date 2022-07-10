const { adoptionRepository, petRepository } = require("../../repository");
const STATUS = require("../../../shared/utils/status");

class AcceptAdoptionApplyUseCase {
    async accept(data) {
        const { adoptionId } = data.params;
        const { id } = data.auth;

        const adoptionProcess = await adoptionRepository.findOne(adoptionId);
        if (!adoptionProcess) {
            return new Error(
                "Não existe processo de adoção para o ID informado!",
            );
        }

        if (id != adoptionProcess.dataValues.ownerPet_id) {
            return new Error("Você não pode fazer isso!");
        }
        await adoptionRepository.update(adoptionId, {
            statusAdocao: STATUS.Adopted,
        });

        await petRepository.update(adoptionProcess.dataValues.pet_id, {
            petStatus: STATUS.Adopted,
        });
    }
}

module.exports = AcceptAdoptionApplyUseCase;
