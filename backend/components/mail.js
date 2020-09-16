const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
const EMAIL_TEMPLATE = require('./EmailTemplate')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.pass,
    },
})

exports.sendmail = (toemail, name, event) => {
    var num = '20'
    const mailOptions = {
        from: 'SYNSARA 2020 <synsara2020@gmail.com>',
        to: toemail,
        subject: "You're Invited to Synsara 2020", // email subject
        html: EMAIL_TEMPLATE(name, event),
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: ' + info.response)
    })
}
