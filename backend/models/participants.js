var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Participant = new Schema({
    firstname: {
        type: String,
        default: '',
    },
    lastname: {
        type: String,
        default: '',
    },
})

module.exports = mongoose.model('Participant', Participant)
