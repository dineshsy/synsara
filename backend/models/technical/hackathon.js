var mongoose = require('mongoose')
var Schema = mongoose.Schema

const Member = new Schema({
    name: {
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

var Hackathon = new Schema({
    teamName: {
        type: String,
        default: '',
    },
    members: [Member],
})

module.exports = mongoose.model('Hackathon', Hackathon)
