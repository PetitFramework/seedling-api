
const { PageView } = require('../../models')
const { TYPES } = require('../../services/analytics/pageview')
const { getResponse } = require('../../exceptions/serverExceptions')

module.exports = async (req, res) => {
    try {
        const {
            userId,
            url
        } = req.body
        if (url && typeof url === 'string') {
            const typeId = getPageTypeByUrl(url)
            await PageView.create({
                userId,
                url,
                typeId
            })
        }
        res.status(200).json(true)
    } catch (error) {
        const { code, json } = getResponse(error)
        res.status(code).json(json)
    }
}

const getPageTypeByUrl = (url) => {
    const {
        COMUNITY,
        GAME,
        NEWS,
        ARTICLE,
        GUIDES,
        HOME,
        PLATFORMS,
        POST,
        REVIEW,
        USER_TRANSACTIONAL,
        WEBMASTERPAGE,
        OVERLAYS,
        UNKNOWN
    } = TYPES

    if (url === '/') return HOME

    if (contains(url, '/post')) return POST
    if (contains(url, '/comunidad')) return COMUNITY
    if (contains(url, '/overlays')) return OVERLAYS

    if (contains(url, '/login')) return USER_TRANSACTIONAL
    if (contains(url, '/legal')) return WEBMASTERPAGE
    if (contains(url, '/register')) return USER_TRANSACTIONAL

    if (contains(url, '/social')) return USER_TRANSACTIONAL
    if (contains(url, '/juegos')) return GAME
    if (contains(url, '/noticias')) return NEWS
    if (contains(url, '/guias')) return GUIDES
    if (contains(url, '/plataformas')) return PLATFORMS
    if (contains(url, '/reportaje')) return ARTICLE
    if (contains(url, '/analisis')) return REVIEW

    return UNKNOWN
}

const contains = (url, subpath) => url.indexOf(subpath) > -1
