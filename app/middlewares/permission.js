const { RefreshToken } = require('../models')
const { getUserByToken, USER_GROUP, hasPermission } = require('../services/user')

const withModifiers = async (req, res, next) => {
    const user = await getUserByToken(req, res, RefreshToken)
    req.vostok = { user }
    next()
}

const withUser = async (req, res, next) => {
    const user = await getUserByToken(req, res, RefreshToken)
    req.vostok = { user }
    if (!user || !user.id) {
        res.status(401).json({ msg: 'Not enough permissions: not user setted' })
    } else {
        next()
    }
}
const onlyAdmin = async (req, res, next) => {
    const { user } = req.vostok
    if (hasPermission(user.role.id, USER_GROUP.adminstrator)) {
        next()
    } else {
        res.status(401).json({ msg: 'Not enough permissions' })
    }
}

const onlyModerator = async (req, res, next) => {
    const { user } = req.vostok
    if (hasPermission(user.role.id, USER_GROUP.moderator)) {
        next()
    } else {
        res.status(401).json({ msg: 'Not enough permissions' })
    }
}

const onlyWriters = async (req, res, next) => {
    const { user } = req.vostok
    if (hasPermission(user.role.id, USER_GROUP.writer)) {
        next()
    } else {
        res.status(401).json({ msg: 'Not enough permissions' })
    }
}

const onlyPremium = async (req, res, next) => {
    const { user } = req.vostok
    if (hasPermission(user.role.id, USER_GROUP.premium)) {
        next()
    } else {
        res.status(401).json({ msg: 'Not enough permissions' })
    }
}

const onlyRegisters = async (req, res, next) => {
    const { user } = req.vostok
    if (hasPermission(user.role.id, USER_GROUP.register)) {
        next()
    } else {
        res.status(401).json({ msg: 'Not enough permissions' })
    }
}

const onlyTwitchers = async (req, res, next) => {
    next()
}
module.exports = {
    onlyAdmin,
    onlyModerator,
    onlyPremium,
    onlyRegisters,
    onlyTwitchers,
    onlyWriters,
    withModifiers,
    withUser
}
