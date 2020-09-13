var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Photo = new Schema({
    name: {
        type: String,
        default: '',
    },
    instaId: {
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

module.exports = mongoose.model('Photo', Photo)
