const express = require('express')

const Participants = require('../models/participants')

const formRouter = express.Router()

formRouter
    .route('/')
    .get((req, res, next) => {
        console.log('get')
        Participants.find()
            .then(
                (participants) => {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json')
                    res.json(participants)
                },
                (err) => next(err)
            )
            .catch((err) => next(err))
    })
    .post((req, res, next) => {
        console.log('post')
        Participants.create(req.body)
            .then(
                (participant) => {
                    console.log('Participant Registered', participant)
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json')
                    res.json(participant)
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
