const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.set("useNewUrlParser", true)
module.exports = mongoose.connect('mongodb://localhost/mymoney', {
    "auth": { "authSource": "admin" },
    "user": "root",
    "pass": "dfweumro",
    "useMongoClient": true,
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obigatório"
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.Number.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'."
