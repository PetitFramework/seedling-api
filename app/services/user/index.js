const { Op } = require('sequelize')
const { verifyToken } = require('../../utils/token')

const USER_GROUP = {
    adminstrator: [6],
    writer: [4, 5, 6],
    moderator: [3, 5, 6],
    premium: [2, 3, 4, 5, 6],
    register: [1, 2, 3, 4, 5, 6]
}

const getUsersByGroup = async (userGroup, User) => {
    const users = await User.findAll({
        attributes: ['id'],
        where: {
            roleId: {
                [Op.or]: userGroup
            }
        }
    })
    return users.map(({ id }) => id)
}

const getUserByToken = async (req, res, RefreshToken) => {
    const { user } = await verifyToken(req, res, RefreshToken) || { user: { id: undefined, role: {} } }
    return user
}

const getPostPermissionsByUser = (user) =>
    !hasPermission(user.role.id, USER_GROUP.moderator)
        ? { authorId: user.id }
        : {}

const hasPermission = (role, group) => group.some((entry) => role === entry)

module.exports = {
    getUsersByGroup,
    getUserByToken,
    hasPermission,
    getPostPermissionsByUser,
    USER_GROUP
}
