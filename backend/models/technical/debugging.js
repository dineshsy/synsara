var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Debugging = new Schema({
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

module.exports = mongoose.model('Debugging', Debugging)
