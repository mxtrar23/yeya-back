const { Sequelize, DataTypes , Model} = require('sequelize');

const REGISTER_TABLE = 'reg_registers';

const RegisterSchema = {
  reg_id:{
    allowNull:false,
    autoIncrement:false,
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  reg_descripcion:{
    allowNull:false,
    type:DataTypes.STRING
  },
  reg_value:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  reg_date:{
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue:DataTypes.NOW
  },
  reg_state:{
    allowNull:false,
    type:DataTypes.BOOLEAN,
    defaultValue:true
  }
}

class Register extends Model {
  static associate() {
    //models
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
