const {Register,RegisterSchema} = require('./registers.model')


function setupModels(sequalize) {
  Register.init(RegisterSchema,Register.config(sequalize))
}

module.exports = setupModels
