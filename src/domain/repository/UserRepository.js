const { User } = require("../../shared/infra/database/models/index");

class UserRepository {
   async findAll() {
      return await User.findAll();
   }
   async findOne(userId) {
      return await User.findByPk(userId);
   }
   async findByEmail(userEmail) {
      return await User.findOne({ where: { email: userEmail } });
   }
   async create(objUser) {
      return await User.create(objUser);
   }
   async update(userId, objUser) {
      return await User.update(objUser, { where: { id: userId } });
   }
   async destroy(userId) {
      return await  User.update({ userStatus: 0 }, { where: { id: userId } });
   }
}

module.exports = UserRepository;
