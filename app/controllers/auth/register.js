const bcrypt = require('bcrypt')
const slugify = require('slugify')
const { User, Role, RefreshToken } = require('../../models')
const { AuthException, authCodes } = require('../../exceptions')
const authConfig = require('../../../config/auth')
const { createAccessToken, setRefreshToken } = require('../../utils/token')
const { cleanParameters } = require('../../utils/parameters')
const { getResponse } = require('../../exceptions/serverExceptions')

const getNetworkField = (network, socialId, accesToken, refreshToken) => {
    switch (network) {
    case 'twitch':
        return { twitchId: socialId, twitchAccessToken: accesToken, twitchRefreshToken: refreshToken }
    case 'discord':
        return { discordId: socialId }
    case 'google':
    default:
        return {}
    }
}
module.exports = async (req, res) => {
    try {
        const { socialId, network, accessToken = '', refreshToken = '' } = req.body
        const networkField = getNetworkField(network, socialId, accessToken, refreshToken)

        if (!req.body.password) {
            throw new AuthException(406,
                {
                    code: authCodes.EMPTY_FIELDS,
                    msg: 'Empty fields',
                    value: 'empty'
                })
        }

        const insert = cleanParameters({
            name: req.body.name,
            email: req.body.email,
            ...networkField,
            slug: slugify(req.body.name || '', { lower: true }),
            password: bcrypt.hashSync(req.body.password, authConfig.salt)
        })

        const createdUser = await User.create(insert)
        const userInfo = await User.findByPk(createdUser.id, {
            attributes: {
                exclude: ['password']
            },
            include: {
                model: Role,
                as: 'role'
            }
        })

        const user = (userInfo).toJSON()
        await setRefreshToken(user, res, RefreshToken)
        res.status(200).json(createAccessToken({ user }, user))
    } catch (error) {
        //
        const { code, json } = getResponse(error)
        res.status(code).json(json)
        /*
        let code = 500
        if (error.errors) {
            error.errors.forEach((err) => {
                const c = err.original.args.code
                if (c === 1 || c === 2) code = 409
            })
        }

        res.status(code).json(error)
        */
    }
}
