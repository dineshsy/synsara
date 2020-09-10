const express = require('express')

const Gaming = require('../../models/non technical/gaming')
const mailer = require('../../components/mail')

const gamingRouter = express.Router()

gamingRouter.route('/').post(async (req, res, next) => {
    var flag = 0
    for (const reqobj of req.body.players) {
        try {
            const f = await Gaming.findOne().elemMatch('players', {
                emailId: reqobj.emailId,
            })
            // Query to check whether participant has already registered
            if (f != null) {
                flag = 1
                username = f.players[0].name
                break
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (flag === 1) {
        // Already Resgistered
        console.log('Participant already registered under ', username)
        res.statusCode = 409
        res.setHeader('Content-Type', 'application/json')
        res.send(username)
    } else {
        console.log('new')
        //New Registration
        Gaming.create(req.body)
            .then(
                (participant) => {
                    console.log('Participants Registered', participant)
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json')
                    res.json(participant)
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
})

module.exports = gamingRouter
