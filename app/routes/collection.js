const { getCollection, getCollections } = require('../controllers/collections')

module.exports = (router) => {
    router.get('/collections/:slug', getCollection)
    router.get('/collections/', getCollections)
    return router
}
