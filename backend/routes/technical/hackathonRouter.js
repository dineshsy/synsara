const express = require('express')

const Hackthon = require('../../models/technical/hackathon')
const mailer = require('../../components/mail')

const hackathonRouter = express.Router()

hackathonRouter.route('/').post(async (req, res, next) => {
    var flag = 0

    try {
        const g = await Hackthon.findOne({ teamName: req.body.teamName })
        if (g != null) {
            flag = -1
        }

        if (flag >= 0) {
            for (const reqobj of req.body.members) {
                const f = await Hackthon.findOne().elemMatch('members', {
                    emailId: reqobj.emailId,
                })
                // Query to check whether participant has already registered
                if (f != null) {
                    flag = 1
                    username = f.members[0].name
                    break
                }
            }
        }

        if (flag === 1) {
            // Already Resgistered
            console.log('Participant is already registered under ', username)
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.json({ error: 'player', leader: username })
        } else if (flag === -1) {
            //team name already choosen
            console.log('Team Name already Choosen error')
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.json({ error: 'teamname' })
        } else {
            console.log('new')
            //New Registration
            Hackthon.create(req.body)
                .then(
                    (participant) => {
                        console.log('Participants Registered', participant)
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        res.json(participant)
                        for (const mailObj of participant.members) {
                            mailer.sendmail(
                                mailObj.emailId,
                                mailobj.name,
                                'hackathon'
                            )
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

module.exports = hackathonRouter
