const {Register,RegisterSchema} = require('./registers.model')
const { User, UserSchema } = require('./users.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Register.init(RegisterSchema,Register.config(sequelize))


  User.associate(sequelize.models);
  Register.associate(sequelize.models);
}

module.exports = setupModels
