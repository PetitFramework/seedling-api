'use strict'
const { PageType } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await PageType.create({
            id: 1,
            code: 'home',
            name: 'Inicio'
        })

        await PageType.create({
            id: 2,
            code: 'game',
            name: 'Ficha de juego'
        })

        await PageType.create({
            id: 3,
            code: 'comunity',
            name: 'Comunidad'
        })

        await PageType.create({
            id: 4,
            code: 'post',
            name: 'Mensajes de Comunidad'
        })

        await PageType.create({
            id: 5,
            code: 'platforms',
            name: 'Plataformas'
        })

        await PageType.create({
            id: 6,
            code: 'guides',
            name: 'Guías'
        })

        await PageType.create({
            id: 7,
            code: 'review',
            name: 'Análisis'
        })

        await PageType.create({
            id: 8,
            code: 'article',
            name: 'Reportaje'
        })

        await PageType.create({
            id: 9,
            code: 'news',
            name: 'Noticias'
        })

        await PageType.create({
            id: 10,
            code: 'user_transactional',
            name: 'Registro/Login'
        })

        await PageType.create({
            id: 11,
            code: 'webmasterpage',
            name: 'Web Master Page'
        })

        await PageType.create({
            id: 12,
            code: 'overlays',
            name: 'Overlays'
        })

        await PageType.create({
            id: 13,
            code: 'unknown',
            name: 'TBA'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PageType', null, {})
    }
}
