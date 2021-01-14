const { verifyToken } = require('../../utils/token')
const { getResponse } = require('../../exceptions/serverExceptions')
const { RefreshToken } = require('../../models')

module.exports = async (req, res) => {
    try {
        res.json(await verifyToken(req, res, RefreshToken))
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}
