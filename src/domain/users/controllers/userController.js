const { Users } = require("../../../shared/infra/database/models");
const bcrypt = require("bcryptjs");
const e = require("express");

const UserController = {
    

    async findAll(req, res) {
        try {
            const allUsers = await Users.findAll({
                where: {
                    userStatus: 1,
                },
                attributes: {
                    exclude: [
                        "senha",
                        "permissao",
                        "userStatus",
                        "createdAt",
                        "updatedAt",
                    ],
                },
            });

            if (!allUsers) {
                return res.status(200).json("Nenhum usuário cadastrado!");
            }

            res.status(200).json(allUsers);
        } catch (error) {
            return res.status(500).json("Ocorreu um erro ao listar usuários");
        }
    },

    async findOne(req, res) {
        try {
            const { id } = req.params;
            const user = await Users.findOne({
                where: {
                    userStatus: 1,
                    id: id,
                },
                attributes: {
                    exclude: [
                        "senha",
                        "permissao",
                        "userStatus",
                        "createdAt",
                        "updatedAt",
                    ],
                },
            });
            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(404).json("usuario nao encontrado");
            }
        } catch (error) {
            return res.status(500).json("Ocorreu um erro ao listar usuários");
        }
    },

    async destroyUser(req, res) {
        try {
            const { id } = req.params;

            const userToDestroy = await Users.findOne({
                where: {
                    userStatus: 1,
                    id: id,
                },
            });

            if (!userToDestroy) {
                return res.status(404).json("usuario nao encontrado");
            }

            await Users.update(
                {
                    userStatus: 0,
                },
                {
                    where: {
                        id: id,
                    },
                },
            );
            return res
                .status(202)
                .json(`Usuario ${userToDestroy.nome} deletado`);
        } catch (error) {
            return res.status(500).json("Ocorreu um erro ao listar usuários");
        }
    },

    async alterar(req, res) {
        try {
            const { id } = req.params;
            const { senha } = req.body;

            const userToUpdate = await Users.findOne({
                where: {
                    userStatus: 1,
                    id: id,
                },
            });

            if (!userToUpdate) {
                return res.status(404).json("usuario nao encontrado");
            }

            await Users.update(
                {
                    ...req.body,
                },
                {
                    where: {
                        id: id,
                    },
                },
            );

            if (senha) {
                const newPass = bcrypt.hashSync(senha, 10);
                await Users.update(
                    {
                        senha: newPass,
                    },
                    {
                        where: {
                            id: id,
                        },
                    },
                );
            }

            return res.status(202).json(`Usuario ${id} alterado`);
        } catch (error) {
            return res.status(400).json("usuario nao alterado");
        }
    },
};

module.exports = UserController;
