const express = require('express')

const Connexion = require('../../models/non technical/connexions')
const mailer = require('../../components/mail')

const connexionRouter = express.Router()

connexionRouter.route('/').post((req, res, next) => {
    Connexion.findOne({ emailId: req.body.emailId }).then((participant) => {
        if (participant != null) {
            console.log('Participant already registered', participant)
            res.statusCode = 409
            res.setHeader('Content-Type', 'application/json')
            res.send(participant)
        } else {
            Connexion.create(req.body)
                .then(
                    (participant) => {
                        console.log('Participant Registered', participant)
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        res.json(participant)
                        mailer.sendmail(req.body.emailId, 'connexion') //participant email and event name must be added
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

module.exports = connexionRouter
