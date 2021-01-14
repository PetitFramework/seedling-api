const getResponse = (error) => {
    console.error(error)
    let sendError = {
        serverError: 500,
        message: 'Server Error'
    }
    if (error.args) {
        sendError = { serverError: error.args.code, cause: error.args.value, message: error.args.msg }
    }
    if (error.parent) {
        sendError = { serverError: 409, cause: error.parent.code, code: error.parent.errno, message: error.parent.sqlMessage }
    }

    if (error.errors) {
        sendError = {
            serverError: 409,
            cause: error.errors.map(({ path }) => path),
            message: error.errors.map(({ message }) => message)
        }
    }
    return {
        code: sendError.serverError,
        json: sendError
    }
}

module.exports = {
    getResponse
}
