var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Dream11 = new Schema({
    name: {
        type: String,
        default: '',
    },
    mobileNumber: {
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
})

module.exports = mongoose.model('Dream11', Dream11)
