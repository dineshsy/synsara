const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const server = http.createServer(app)

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header('Access-Control-Expose-Headers', 'Access-Control-Allow-O')

    if (req.header === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, GET, PATCH, DELETE'
        )
        return res.status(200).json({})
    }
    next()
})

//Connect to Mongo
mongoose.connect(
    process.env.MONGO_DB_URI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
    () => {
        console.log('mongoose connected...')
    }
)

server.listen(process.env.PORT, () => {
    console.log('server connected')
})
