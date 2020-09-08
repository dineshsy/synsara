var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Coding = new Schema({
    name: {
        type: String,
        default: '',
    },
    hackerrank_username: {
        type: String,
        default: '',
    },
})

module.exports = mongoose.model('Coding', Coding)
