
const authConfig = require('../../../config/auth')
const { AuthException, authCodes } = require('./../../exceptions')
const { User } = require('../../models')
const { getResponse } = require('../../exceptions/serverExceptions')
const dayjs = require('dayjs')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    try {
        const { email } = req.body
        if (!email) {
            throw new AuthException(406, {
                code: authCodes.EMPTY_FIELDS,
                msg: 'Empty fields',
                value: 'empty'
            })
        }
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (user) {
            const token = generateRecoverToken()
            addRecoverToken(user, token)
            sendEmail((user), token)
        } else {
            throw new AuthException(406, {
                code: authCodes.EMAIL_DOES_NOT_EXIT,
                msg: `Email does not exist: ${email}`,
                value: 'email'
            })
        }
        res.status(200).json(true)
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}

const addRecoverToken = async (user, recoverToken) => {
    await user.update({
        recoverToken,
        expireRecover: dayjs().add(authConfig.recoverExpirationTime, 'minutes')
    }, { type: 'login' })
}

const sendEmail = ({ email, name }, token) => {
    const bodyEmail = `
        Querido ${name}, has solicitado un reinicio de contraseña para tu cuenta vinculada al correo electrónico ${email}, accede a esta url para crear una nueva contraseña:

        ${authConfig.recoverUri}/?token=${token}&email=${email}
    `
    // TODO: Add node mailer
    console.log(bodyEmail)
}

const generateRecoverToken = () => bcrypt.hashSync(Math.random().toString(36) + Math.random().toString(36).toUpperCase(), authConfig.salt)
