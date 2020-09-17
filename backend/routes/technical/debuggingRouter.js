const express = require('express')

const Debugging = require('../../models/technical/debugging')
const mailer = require('../../components/mail')

const debuggingRouter = express.Router()

debuggingRouter.route('/').post((req, res, next) => {
    Debugging.findOne({ emailId: req.body.emailId }).then((participant) => {
        if (participant != null) {
            console.log('Participant already registered', participant)
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.send(participant)
        } else {
            Debugging.create(req.body)
                .then(
                    (participant) => {
                        console.log('Participant Registered', participant)
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        res.json(participant)
                        mailer.sendmail(
                            req.body.emailId,
                            req.body.name,
                            'debugging'
                        ) //participant email and event name must be added
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

module.exports = debuggingRouter
