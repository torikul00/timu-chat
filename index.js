// External imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
dotenv.config()

// Internal Imports
const { errorHandler, notFoundHandler } = require('./middleware/common/errorhandler')
const loginRouter = require('./handleRoute/loginRoute')
const usersRouter = require('./handleRoute/usersRoute')
const inboxRouter = require('./handleRoute/inboxRoute')



// databse connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

// request parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set view engine 
app.set("view engine", "ejs")

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET))

// routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)
// 404 not found handler
app.use(notFoundHandler)

// common handler 
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log('Server running on ' + process.env.PORT)
})