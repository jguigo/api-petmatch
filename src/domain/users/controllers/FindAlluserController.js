const { Users } = require("../../../shared/infra/database/models");

const UserController = {
    async findAll(req, res) {
        try {
            const allUsers = await Users.findAll({
                where: {
                    userStatus: 1,
                },
                attributes: { exclude: "password" },
            });

            if (!allUsers) {
                return res.status(200).json("Nenhum usuário cadastrado!");
            }

            res.status(200).json(allUsers);
        } catch (error) {
            return res.status(500).json("Ocorreu um erro ao listar usuários");
        }
    },
};

module.exports = UserController;
