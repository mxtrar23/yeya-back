'use strict';

const {REGISTER_TABLE,RegisterSchema} = require('../models/registers.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.createTable(REGISTER_TABLE,RegisterSchema,{logging:console.log})
  },
  async down (queryInterface) {
    await queryInterface.dropTable(REGISTER_TABLE,RegisterSchema)
   }
};
