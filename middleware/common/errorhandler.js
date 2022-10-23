const createError = require('http-errors')

// not found handler
function notFoundHandler(req, res, next) {

    next(createError(404, 'Your requested content was not found'))

}
// deafult error handler

function errorHandler(err, req, res, next) {

    res.locals.error = process.env.NODE_ENV === "development" ? err : { message: err.message }
    if (res.locals.html) {
        // html response
        res.render("error", {
            title: "Error page !"
        })
    } else {
        // json response
        res.json(res.locals.error)
    }

}
module.exports = {
    notFoundHandler,
    errorHandler
}