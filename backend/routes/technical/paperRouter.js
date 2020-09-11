const express = require('express')

const Paper = require('../../models/technical/paper')
const mailer = require('../../components/mail')

const paperRouter = express.Router()

paperRouter.route('/').post(async (req, res, next) => {
    var flag = 0
    for (const reqobj of req.body.members) {
        try {
            const f = await Paper.findOne().elemMatch('members', {
                emailId: reqobj.emailId,
            })
            // Query to check whether participant has already registered
            if (f != null) {
                flag = 1
                username = f.members[0].name
                break
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (flag === 1) {
        // Already Resgistered
        console.log('One Participant is already registered under ', username)
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

module.exports = paperRouter
