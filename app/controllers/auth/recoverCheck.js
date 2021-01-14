
const { AuthException, authCodes } = require('../../exceptions')
const { User } = require('../../models')
const dayjs = require('dayjs')
const { getResponse } = require('../../exceptions/serverExceptions')

module.exports = async (req, res) => {
    try {
        const { email, token } = req.body
        if (!email || !token) {
            throw new AuthException(406,
                {
                    code: authCodes.EMPTY_FIELDS,
                    msg: 'Empty fields',
                    value: 'empty'
                })
        }
        const user = await User.findOne({
            where: {
                email,
                recoverToken: token
            }
        })

        if (!user) {
            throw new AuthException(406,
                {
                    code: authCodes.WRONG_RECOVER_URI,
                    msg: 'Wrong recover uri with email',
                    value: 'uri'
                })
        }

        if (!isAvailableToken(user.expireRecover)) {
            throw new AuthException(406,
                {
                    code: authCodes.RECOVER_TOKEN_EXPIRED,
                    msg: `Token Expired ${token}`,
                    value: 'recoverToken'
                })
        }

        // TODO: RECOVER PASSWORD
        res.status(200).json(true)
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}

const isAvailableToken = (expireRecover) =>
    dayjs().isBefore(dayjs(expireRecover))
