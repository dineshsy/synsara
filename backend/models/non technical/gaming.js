var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Gaming = new Schema({
    captain: {
        type: Player,
        default: '',
    },
    player2: {
        type: Player,
        default: '',
    },
    player3: {
        type: Player,
        default: '',
    },
    player4: {
        type: Player,
        default: '',
    },
})

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

module.exports = mongoose.model('Gaming', Gaming)
