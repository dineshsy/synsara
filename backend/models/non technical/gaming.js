var mongoose = require('mongoose')
var Schema = mongoose.Schema

const Player = new Schema({
    name: {
        type: String,
        default: '',
    },
    gamingId: {
        type: String,
        default: '',
    },
    emailId: {
        type: String,
        default: '',
    },
    dept: {
        type: String,
        default: '',
    },
    year: {
        type: String,
        default: '',
    },
    collegeName: {
        type: String,
        default: '',
    },
    mobileNumber: {
        type: String,
        default: '',
    },
})

var Gaming = new Schema({
    players: [Player],
})

module.exports = mongoose.model('Gaming', Gaming)
