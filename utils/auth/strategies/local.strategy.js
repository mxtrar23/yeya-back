const {Strategy} = require('passport-local');
const boom = require('@hapi/boom')

const bcrypt = require('bcrypt');

const UserService = require('../../../services/users.service')

const service = new UserService()

const LocalStrategy = new Strategy({
  usernameField:'email'
},async (email,password,done)=>{
  try {
    const user = await service.findbyEmail(email);
    if(!user) done(boom.unauthorized('No Autorized'),false)

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) done(boom.unauthorized('No Autorized'),false)

    delete user.dataValues.password;
    done(null,user);

  } catch (error) {
    done(error,false)
  }
});

module.exports = LocalStrategy;
