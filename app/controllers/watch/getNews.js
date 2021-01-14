
const {
    Watch, Property, Mechanism,
    Gender, WatchCase, Glass,
    Resistance, Image
} = require('../../models')
const { getResponse } = require('../../exceptions/serverExceptions')
const { ValidationException } = require('../../exceptions')

module.exports = async (req, res, next) => {
    try {
        const watchEntry = await Watch.findAll({
            limit: 6,
            include: [{
                model: Property,
                as: 'properties'
            }, {
                model: Mechanism,
                as: 'mechanisms'
            },
            {
                model: Gender,
                as: 'gender'
            },
            {
                model: WatchCase,
                as: 'case'
            },
            {
                model: Glass,
                as: 'glass'
            },
            {
                model: Resistance,
                as: 'resistance'
            },
            {
                model: Image,
                as: 'images'
            }]
        })

        if (!watchEntry) throw new ValidationException({ msg: 'Not valid user', value: 'id' })
        res.status(200).json(watchEntry)
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}
