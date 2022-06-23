const { findAllPetUserCase } = require('../useCase/index');

class FindAllPetController {
  async findAll(req, res) {
    try {
      const result = await findAllPetUserCase.findAll();

      return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json(`INTERNAL ERROR: ${error}`);
    }
  }
}

module.exports = FindAllPetController;