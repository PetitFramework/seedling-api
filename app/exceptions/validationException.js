class ExtendabledError extends Error {
    constructor (message) {
        super(message)
        this.name = 'ValidationException'
    }
}

class ValidationException extends ExtendabledError {
    constructor ({ msg = '', value = '', code = 405 }) {
        super('code: ' + code)
        this.args = {
            type: 'validation',
            code,
            msg: `[Error: ${this.name}] with code ${code}: ${msg}`,
            value
        }
    }
}

module.exports = {
    ValidationException
}
