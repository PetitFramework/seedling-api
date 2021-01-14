'use strict'

const { Promo } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Promo.create({
            code: 'new',
            name: 'new'
        })
        await Promo.create({
            code: 'offer',
            name: 'offer'
        })
        await Promo.create({
            code: 'last',
            name: 'last'
        })
        await Promo.create({
            code: 'highlight',
            name: 'highlight'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Promos', null, {})
    }
}
