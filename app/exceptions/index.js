const AuthException = require('./authException')
const ValidationException = require('./validationException')

module.exports = {
    ...AuthException,
    ...ValidationException
}
