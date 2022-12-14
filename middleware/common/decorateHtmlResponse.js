function decoreateHtmlResponse(title) {
    return function (req, res, next) {
        res.locals.html = true
        res.locals.title = title
        next()
    }
}

module.exports = decoreateHtmlResponse