
const {
    Watch, Property, Mechanism,
    Gender, WatchCase, Glass,
    Resistance, Image, Collection,
    Calibre, Origin
} = require('../../models')
const { getResponse } = require('../../exceptions/serverExceptions')
const { ValidationException } = require('../../exceptions/')
const { hasPermission, USER_GROUP } = require('../../services/user')

module.exports = async (req, res, next) => {
    try {
        const { slug } = req.params
        const { user } = req.vostok

        const watchEntry = await Watch.findOne({
            where: { slug },
            attributes: {
                exclude: EXCLUSIONS
            },
            include: INCLUSIONS
        })

        if (!watchEntry) throw new ValidationException({ msg: 'Not valid user', value: 'id' })
        res.status(200).json({
            ...watchEntry.toJSON(),
            editable: hasPermission(user.role.id, USER_GROUP.adminstrator)
        })
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}

const EXCLUSIONS = [
    'collectionId',
    'mechanismId',
    'promoId',
    'genderId',
    'caseId',
    'resistanceId',
    'glassId',
    'createdAt',
    'updatedAt'
]

const INCLUSIONS = [{
    model: Property,
    as: 'properties',
    attributes: ['code', 'name', 'unity'],
    through: {
        as: 'params',
        attributes: ['value']
    }
}, {
    model: Mechanism,
    as: 'mechanisms'
},
{
    model: Gender,
    as: 'gender',
    attributes: ['code', 'name']
},
{
    model: WatchCase,
    as: 'case',
    attributes: ['code', 'name']

},
{
    model: Glass,
    as: 'glass',
    attributes: ['code', 'name']
},
{
    model: Resistance,
    as: 'resistance',
    attributes: ['code', 'name']
},
{
    model: Image,
    as: 'images',
    attributes: ['src', 'title', 'alt']

}, {
    model: Collection,
    as: 'collection',
    attributes: ['name', 'slug', 'banDiscount']

}, {
    model: Calibre,
    as: 'calibres',
    attributes: ['name', 'code'],
    through: {
        attributes: []
    },
    include: {
        model: Origin,
        attributes: ['name', 'code', 'hide'],
        as: 'origin'

    }
}]
