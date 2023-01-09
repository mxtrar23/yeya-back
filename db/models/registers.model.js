const { DataTypes , Model} = require('sequelize');
const { USER_TABLE } = require('./users.model')

const REGISTER_TABLE = 'reg_registers';

const RegisterSchema = {
  id:{
    allowNull:false,
    autoIncrement:false,
    field:'reg_id',
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  descripcion:{
    allowNull:false,
    type:DataTypes.STRING,
    field:'reg_descripcion'
  },
  value:{
    allowNull:false,
    type:DataTypes.INTEGER,
    field:'reg_value'
  },
  state:{
    allowNull:false,
    type:DataTypes.BOOLEAN,
    defaultValue:true,
    field:'reg_state'
  },
  createdAt:{
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue:DataTypes.NOW,
    field:'reg_create_at'
  },
  userId: {
    field: 'usr_id',
    allowNull: false,
    type: DataTypes.UUID,
    references: {
      model: USER_TABLE,
      key: 'usr_id'
    },
    // onUpdate: 'CASCADE',
    // onDelete: 'SET NULL'
  }
}

class Register extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'usr_users',
      foreignKey:'usr_id'
    });
  }

  static config(sequelize){

    return {
      sequelize,
      tableName:REGISTER_TABLE,
      modelName:'Register',
      timestamps: false,
    }
  }
}


module.exports = {REGISTER_TABLE,RegisterSchema,Register}
