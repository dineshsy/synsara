const express = require('express')

const Coding = require('../../models/technical/coding')
const mailer = require('../../components/mail')

const codingRouter = express.Router()

codingRouter.route('/').post((req, res, next) => {
    Coding.findOne({ emailId: req.body.emailId }).then((participant) => {
        if (participant != null) {
            console.log('Participant already registered', participant)
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.send(participant)
        } else {
            Coding.create(req.body)
                .then(
                    (participant) => {
                        console.log('Participant Registered', participant)
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        res.json(participant)
                        mailer.sendmail(
                            req.body.emailId,
                            req.body.name,
                            'coding'
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

module.exports = codingRouter
