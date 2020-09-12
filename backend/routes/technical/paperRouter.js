const express = require('express')

const Paper = require('../../models/technical/paper')
const mailer = require('../../components/mail')

const paperRouter = express.Router()

paperRouter.route('/').post(async (req, res, next) => {
    var flag = 0

    try {
        for (const reqobj of req.body.members) {
            const f = await Paper.findOne().elemMatch('members', {
                emailId: reqobj.emailId,
            })
            // Query to check whether participant has already registered
            if (f != null) {
                flag = 1
                username = f.members[0].name
                break
            }
        }
        if (flag === 1) {
            // Already Resgistered
            console.log('Participant is already registered under ', username)
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.send(username)
        } else {
            console.log('new')
            //New Registration
            Paper.create(req.body)
                .then(
                    (participant) => {
                        console.log('Participants Registered', participant)
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        res.json(participant)
                        for (const mailObj of participant.members) {
                            mailer.sendmail(mailObj.emailId, 'paper')
                        }
                        //participant email and event name must be added
                    },
                    (err) => {
                        console.log('error')
                        next(err)
                    }
                )
                .catch((err) => {
                    console.log('error')
                    next(err)
                })
        }
    } catch (err) {
        console.log(err)
        console.log('Invalid Data')
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        res.send('Invalid Data')
    }
})

module.exports = paperRouter
