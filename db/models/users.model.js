const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'usr_users';

const UserSchema = {
  id: {
    allowNull:false,
    autoIncrement:false,
    field:'usr_id',
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    allowNull: false,
    field:'usr_username',
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    allowNull: false,
    field:'usr_email',
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    field:'usr_password',
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    field:'usr_role',
    type: DataTypes.STRING,
    defaultValue: 'admin'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'usr_create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(models) {
    this.hasMany(models.Register, {
      as: 'reg_registers',
      foreignKey: 'reg_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
