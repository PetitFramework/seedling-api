const { RefreshToken } = require('../../models')
const { logout } = require('../../utils/token')
const { getResponse } = require('../../exceptions/serverExceptions')

module.exports = async (req, res) => {
    try {
        res.clearCookie('sessionToken')
        res.status(200).json(await logout(req, res, RefreshToken))
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}
