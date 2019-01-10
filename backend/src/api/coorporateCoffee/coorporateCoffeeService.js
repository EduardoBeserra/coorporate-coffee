const CoorporateCoffee = require('./coorporateCoffee')
const errorHandler = require('../common/errorHandler')

CoorporateCoffee.methods(['get', 'post', 'put', 'delete'])
CoorporateCoffee.updateOptions({ new: true, runValidators: true})
CoorporateCoffee.after('post', errorHandler).after('put', errorHandler)

module.exports = CoorporateCoffee