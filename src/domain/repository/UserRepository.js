const { Users } = require("../../shared/infra/database/models/index");
const STATUS = require("../../shared/utils/status");

class UserRepository {
    async findAll() {
        return await Users.findAll({
            where: {
                userStatus: STATUS.Active,
            },
            attributes: {
                exclude: ["userStatus"],
            },
        });
    }
    async findOne(userId) {
        return await Users.findOne({
            where: {
                userStatus: STATUS.Active,
                id: userId,
            },
        });
    }

    async findByEmail(userEmail) {
        return await Users.findOne({
            where: { userStatus: STATUS.Active, email: userEmail },
            attributes: {
                exclude: ["userStatus"],
            },
        });
    }
    async checkEmail(userEmail) {
        return await Users.count({ where: { email: userEmail } });
    }
    async checkCPF(userCPF) {
        return await Users.count({ where: { cpf: userCPF } });
    }
    async create(objUser) {
        return await Users.create(objUser);
    }
    async update(userId, objUser) {
        return await Users.update(objUser, { where: { id: userId } });
    }
    async destroy(userId) {
        return await Users.update({ userStatus: STATUS.Deleted }, { where: { id: userId } });
    }
}

module.exports = UserRepository;
