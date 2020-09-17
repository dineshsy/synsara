const express = require('express')
const codingRouter = require('./technical/codingRouter')
const debuggingRouter = require('./technical/debuggingRouter')
const hackathonRouter = require('./technical/hackathonRouter')
const paperRouter = require('./technical/paperRouter')

const techApp = express()

techApp.use('/coding', codingRouter)
techApp.use('/debugging', debuggingRouter)
techApp.use('/hackathon', hackathonRouter)
techApp.use('/paper', paperRouter)

module.exports = techApp
