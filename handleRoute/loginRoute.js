const express = require('express')
const { getLogin } = require('./controller/loginController')
const decoreateHtmlResponse = require('../middleware/common/decorateHtmlResponse')


const router = express.Router()

router.get('/', decoreateHtmlResponse('Login'), getLogin)


module.exports = router