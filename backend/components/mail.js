const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.pass,
    },
})

exports.sendmail = (toemail, event) => {
    var num = '20'
    const mailOptions = {
        from: 'SYNSARA 2020 <synsara2020@gmail.com>',
        to: toemail,
        subject: 'Registration Confirmation for Event ' + event, // email subject
        text: 'TEST 123 \n Hello', //content to be added based on event recieved
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: ' + info.response)
    })
}
