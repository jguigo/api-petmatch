'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('pets', {
      fields: ['userID'],
      type: 'foreign key',
      name: 'pets_user_id_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('pets');
  },
};
