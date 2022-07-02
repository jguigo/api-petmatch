const { Users } = require("../../shared/infra/database/models/index");

class UserRepository {
    async findAll() {
        return await Users.findAll();
    }
    async findOne(userId) {
        return await Users.findByPk(userId);
    }
    async findByEmail(userEmail) {
        return await Users.findOne({ where: { email: userEmail } });
    }
    async checkEmail(userEmail) {
        return await Users.count({ where: { email: userEmail } });
    }
    async create(objUser) {
        return await Users.create(objUser);
    }
    async update(userId, objUser) {
        return await Users.update(objUser, { where: { id: userId } });
    }
    async destroy(userId) {
        return await Users.update({ userStatus: 0 }, { where: { id: userId } });
    }
}

module.exports = UserRepository;
