const express = require('express')
const { getInbox } = require('./controller/inboxController')
const decoreateHtmlResponse = require('../middleware/common/decorateHtmlResponse')

const router = express.Router()

router.get('/', decoreateHtmlResponse('Inbox'), getInbox)


module.exports = router