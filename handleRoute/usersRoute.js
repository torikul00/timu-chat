const express = require('express')
const { getUsers} = require('./controller/usersController')
const decoreateHtmlResponse = require('../middleware/common/decorateHtmlResponse')

const router = express.Router()

router.get('/',decoreateHtmlResponse('Users'), getUsers)


module.exports = router