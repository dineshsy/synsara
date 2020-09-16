const express = require('express')

const Dubsmash = require('../../models/non technical/dub')
const mailer = require('../../components/mail')

const dubRouter = express.Router()

dubRouter.route('/').post((req, res, next) => {
    Dubsmash.findOne({ emailId: req.body.emailId }).then((participant) => {
        if (participant != null) {
            console.log('Participant already registered', participant)
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.send(participant)
        } else {
            Dubsmash.create(req.body)
                .then(
                    (participant) => {
                        console.log('Participant Registered', participant)
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        res.json(participant)
                        mailer.sendmail(req.body.emailId, 'dub') //participant email and event name must be added
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
})

module.exports = dubRouter
