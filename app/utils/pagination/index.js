const setPagination = (p, l) => {
    const page = parseInt(p) > 1 ? parseInt(p) : 1
    const limit = parseInt(l) || 10
    const offset = page && limit ? (page - 1) * limit : 0

    return {
        page,
        limit,
        offset
    }
}

const paginationResults = (pagination, size) => {
    const { page, limit, offset } = pagination
    const count = parseInt(size) || 0
    const current = +page || 1
    const pages = Math.ceil(count / limit)
    const next = current < pages ? current + 1 : false
    const prev = current > 1 ? page - 1 : false

    return {
        offset,
        pages,
        limit,
        current,
        next,
        prev,
        size
    }
}

const getEmpty = () => ({
    offset: 0,
    pages: 0,
    limit: 10,
    current: 1,
    next: false,
    prev: false,
    size: 0,
    items: []
})
module.exports = {
    setPagination,
    paginationResults,
    getEmpty
}
