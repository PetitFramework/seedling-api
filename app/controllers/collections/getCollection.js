
const { Collection, Watch, Image } = require('../../models')
const { getResponse } = require('../../exceptions/serverExceptions')
const { ValidationException } = require('../../exceptions')

module.exports = async (req, res, next) => {
    try {
        const { slug } = req.params
        const collectionEntry = await Collection.findOne({
            where: { slug },
            include: {
                model: Watch,
                as: 'watches',
                include: [
                    {
                        model: Image,
                        as: 'images'
                    }]
            }
        })

        if (!collectionEntry) throw new ValidationException({ msg: 'Not valid collection', value: 'id' })
        res.status(200).json(collectionEntry)
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}
