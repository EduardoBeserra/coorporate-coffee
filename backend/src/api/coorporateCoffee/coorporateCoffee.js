const restful = require('node-restful')
const mongoose = restful.mongoose

const pessoaSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: false}
})

module.exports = restful.model('CoorporateCoffee', pessoaSchema)