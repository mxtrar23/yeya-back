const boom = require('@hapi/boom')
// const poolConex = require('../libs/mysql')
// const sequelize = require('../libs/sequalize')

const {models} = require('../libs/sequelize')

class RegistersService {

  constructor(){
    // this.registers =[]
    // this.generate()
    // this.pool = poolConex.promise();
    // this.pool.on('error',(err)=>console.error(err));
  }

  // async generate () {
  //   this.registers.push({
  //     id:uuidv4(),
  //     valor:2023,
  //     descripcion:"haper.dev",
  //     fecha:"2022"
  //   })
  //   this.registers.push({
  //     id:uuidv4(),
  //     valor:2023,
  //     descripcion:"haper.dev",
  //     fecha:"2022"
  //   })
  // }

  async create (data) {
    const register = {...data}
    //this.registers.push(register);
    console.table(register);
    const newRegister = await models.Register.create(register)
    return newRegister;
  }

  async find (usr_id) {

    //const [rows, fields] = await ConnectionDB.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
    // const query = 'SELECT * FROM registers';
    // const [rows, fields] = await this.pool.query(query);

    // const [data] = await sequelize.query(query);

    const res = await models.Register.findAll({
        where:{
          usr_id,
          state:true
        },
        include: ['cat_categories'],
        order: [['reg_date', 'DESC'],['reg_create_at', 'DESC']],
      })
    return res;
  }

  async findOne (reg_id) {
    const register = await models.Register.findByPk(reg_id)
    if (!register) throw boom.notFound("No Found")
    return register
  }

  async update (reg_id,data) {

    const register = await models.Register.findByPk(reg_id)

    if (!register) throw boom.notFound("No found")

    const res = await register.update(data)
    return res
  }

  async delete (reg_id) {

    const register = await models.Register.findByPk(reg_id)

    if (!register) throw boom.notFound("No found")

    const res = await register.update({state:false})
    return res
  }
}

module.exports = RegistersService;
