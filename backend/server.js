const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
var logger = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const formRouter = require('../backend/routes/form')

dotenv.config()

const app = express()

const server = http.createServer(app)

app.use(express.json({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))

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
        console.log('Database connected...')
    },
    (err) => {
        console.log(err)
    }
)

server.listen(process.env.PORT, () => {
    console.log('server connected')
})

app.use('/register', formRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.send('error')
})
