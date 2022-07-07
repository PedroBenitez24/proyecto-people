const express = require('express')
const People = require('./models/peopleModel')
const peopleRouter = require('./routes/peopleRouter')(People)
const authRouter = require('./routes/authRouter')(People)
const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
const Games = require('./models/gamesModel')
const gamesRouter = require('./routes/gamesRouter')(Games)
require('dotenv').config()
const { expressjwt } = require('express-jwt')



const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.all('/api/*', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })
    .unless({
        path: ['/auth/login', '/auth/register']
    }))

app.use((err, _, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(httpStatus.UNAUTHORIZED).json({
            error: err.name,
            cause: 'Unautorized. Missing or invalid token provided.'
        })
    } else {
        next(err)
    }
})

app.use('/api', peopleRouter)
app.use('/api', gamesRouter)
app.use('/', authRouter)

app.use(errorHandler)

app.listen(5000, () => {
    console.log('server is running!')
})