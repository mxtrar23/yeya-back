const {Register,RegisterSchema} = require('./registers.model')
const { User, UserSchema } = require('./users.model');
const { Category, CategorySchema } = require('./categories.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema,Category.config(sequelize))
  Register.init(RegisterSchema,Register.config(sequelize))


  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Register.associate(sequelize.models);
}

module.exports = setupModels
