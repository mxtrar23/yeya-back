const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'cat_categories';

const CategorySchema = {
  id: {
    allowNull:false,
    autoIncrement:false,
    field:'cat_id',
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    allowNull: false,
    field:'cat_name',
    type: DataTypes.STRING,
    unique: true,
  },
  state:{
    allowNull:false,
    type:DataTypes.BOOLEAN,
    defaultValue:true,
    field:'cat_state'
  }
}

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Register, {
      as: 'reg_registers',
      foreignKey: 'reg_id'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}


module.exports = { CATEGORY_TABLE, CategorySchema, Category}
