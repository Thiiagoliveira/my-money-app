const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigado."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite máximo."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido ao atributo '{PATH}'."



