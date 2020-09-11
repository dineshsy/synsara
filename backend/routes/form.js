const express = require('express')

const Participants = require('../models/participants')
const mailer = require('../components/mail')

const formRouter = express.Router()

formRouter.route('/').post((req, res, next) => {
    Participants.create(req.body)
        .then(
            (participant) => {
                console.log('Participant Registered', participant)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json(participant)
                mailer.sendmail('vasanthkumar14.99@gmail.com', 'hello') //participant email and event name must be added
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
})

module.exports = formRouter
