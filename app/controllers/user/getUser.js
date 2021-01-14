
const { User, Role } = require('../../models')
const { getResponse } = require('../../exceptions/serverExceptions')
const { ValidationException } = require('../../exceptions/')
const { hasPermission, USER_GROUP } = require('../../services/user')

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params
        const { user } = req.vostok

        const userEntry = await User.findOne({
            attributes: { exclude: getExclusionsByRole(user.role.id) },
            where: { id },
            include: [
                {
                    model: Role,
                    as: 'role'
                }
            ]
        })

        if (!userEntry) throw new ValidationException({ msg: 'Not valid user', value: 'id' })

        const userInfo = (userEntry).toJSON()
        res.status(200).json({
            ...userInfo,
            editable: hasPermission(user.role.id, USER_GROUP.adminstrator) || user.id === +id
        })
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}

const getExclusionsByRole = (roleId) => {
    if (hasPermission(roleId, USER_GROUP.adminstrator)) return ['password']
    return ['password', 'recoverToken', 'expireToken', 'attempts', 'lastAttempt']
}
