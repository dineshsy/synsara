var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Coding = new Schema({
    name: {
        type: String,
        default: '',
    },
    hackerrankUsername: {
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

module.exports = mongoose.model('Coding', Coding)
