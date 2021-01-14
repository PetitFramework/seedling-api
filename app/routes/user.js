const {
    withModifiers
} = require('../middlewares/permission')
const { getUser } = require('../controllers/user')

module.exports = (router) => {
    router.get('/users/:id', withModifiers, getUser)
    return router
}
