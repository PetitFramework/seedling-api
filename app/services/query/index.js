const { ValidationException } = require('../../exceptions')

const getWhereByIdOrSlug = (req, table) => {
    let where
    const { id, slug } = req.query
    if (slug) where = { slug }
    if (+id) where = { id }

    if (!where) {
        throw new ValidationException({ msg: `Not identificador ${table} provided`, value: 'Slug o Id' })
    }

    return where
}

module.exports = {
    getWhereByIdOrSlug
}
