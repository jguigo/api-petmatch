const { authUseCase } = require("../useCase/index");

class AuthController {
  async auth(req, res) {
    try {
      const result = authUseCase.execute(req);

      if (result instanceof Error) {
        return res.status(400).json(result.message);
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(`INTERNAL ERROR: ${error}`);
    }
  }
}

module.exports = AuthController;
