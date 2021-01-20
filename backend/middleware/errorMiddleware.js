const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {   //this is our custom error handling
    const statuscode = res.statusCode === 200 ? 500 : res.statuscode
    res.status(statuscode)
    res.json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = { notFound, errorHandler }