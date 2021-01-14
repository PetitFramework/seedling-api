const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')

const createAccessToken = (dataToken, user) => {
    return {
        accessToken: jwt.sign(dataToken, authConfig.accessTokenSecret, { expiresIn: authConfig.expiresIn }),
        user
    }
}

const setRefreshToken = async (user, res, RefreshToken) => {
    const refreshToken = jwt.sign({ user }, authConfig.refreshTokenSecret)
    const encryptedCookie = crypto.AES.encrypt(refreshToken, authConfig.encryptToken).toString()

    res.cookie('sessionToken', encryptedCookie, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        sameSite: 'Strict'
    })

    await RefreshToken.create({
        token: refreshToken,
        userId: user.id
    })
}

const decryptToken = (token) => {
    return crypto.AES.decrypt(decodeURIComponent(token), authConfig.encryptToken).toString(crypto.enc.Utf8)
}

const verifyToken = async (req, res, RefreshToken) => {
    const accessToken = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
    const sessionToken = req.cookies.sessionToken ? decryptToken(req.cookies.sessionToken) : null

    return jwt.verify(accessToken, authConfig.accessTokenSecret, (error, data) => {
        if (!error) return { accessToken, user: data.user }

        return jwt.verify(sessionToken, authConfig.refreshTokenSecret, async (error, data) => {
            if (!error) {
                const refreshToken = await RefreshToken.findOne({ where: { token: sessionToken } })
                if (!refreshToken) {
                    await logout(req, res, RefreshToken)
                    return
                }
                return createAccessToken({ user: data.user }, data.user)
            }
        })
    })
}

const logout = async (req, res, RefreshToken) => {
    let deleteToken = { msg: 'Logged out' }
    if (req.cookies.sessionToken) {
        deleteToken = Object.assign(deleteToken, {
            destroy: await RefreshToken.destroy({
                where: {
                    token: decryptToken(req.cookies.sessionToken)
                }
            })
        })
        res.clearCookie('sessionToken')
    }
    return deleteToken
}

module.exports = {
    setRefreshToken,
    decryptToken,
    verifyToken,
    createAccessToken,
    logout
}
