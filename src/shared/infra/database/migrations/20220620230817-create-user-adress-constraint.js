'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('user-adress', {
      fields: ['userID'],
      type: 'foreign key',
      name: 'useradress_user_id_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('user-adress');
  },
};
