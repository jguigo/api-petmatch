const { findAllPetUseCase } = require('../useCase/index');

class FindAllPetController {
  async findAll(req, res) {
    try {
      const result = await findAllPetUseCase.findAll();

      return res.status(200).json(result);

    } catch (error) {
      console.log(error);
        return res.status(500).json(`INTERNAL ERROR: ${error}`);
    }
  }
}

module.exports = FindAllPetController;