const {
    withModifiers
} = require('../middlewares/permission')
const { getWatch, getNews } = require('../controllers/watch')

module.exports = (router) => {
    router.get('/watch/:slug', withModifiers, getWatch)
    router.get('/watches/news', withModifiers, getNews)

    return router
}
