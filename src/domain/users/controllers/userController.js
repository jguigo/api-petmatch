const { Users } = require("../../../shared/infra/database/models");
const bcrypt = require("bcryptjs");

const UserController = {
    async create(req, res) {
        const {
            nome,
            email,
            cpf,
            senha,
            contato,
            cep,
            logradouro,
            numero_logradouro,
            complemento,
            bairro,
            cidade,
            uf,
        } = req.body;
        const newPass = bcrypt.hashSync(senha, 10);
        try {
            const newUser = await Users.create({
                nome,
                email,
                cpf,
                senha: newPass,
                contato,
                cep,
                logradouro,
                numero_logradouro,
                complemento,
                bairro,
                cidade,
                uf,
                userStatus: 1,
            });
            return res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json("Erro ao criar usuário");
        }
    },

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

    async findOne(req, res) {
        try {
            const id = req.params["id"];

            const user = await Users.findOne({
                where: {
                    userStatus: 1,
                    id: id,
                },
                attributes: ["id", "nome", "email", "cidade", "uf"],
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
};

module.exports = UserController;
