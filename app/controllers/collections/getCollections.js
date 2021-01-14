
const { Collection, Watch, Image } = require('../../models')
const { getResponse } = require('../../exceptions/serverExceptions')

module.exports = async (req, res, next) => {
    try {
        const collectionEntry = await Collection.findAll({
            include: {
                model: Watch,
                as: 'watches',
                limit: 4,
                include: [
                    {
                        model: Image,
                        as: 'images'
                    }]
            }
        })
        res.status(200).json(collectionEntry)
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}
