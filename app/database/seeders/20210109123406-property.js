'use strict'

const { Property } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Property.create({
            code: 'flux',
            name: 'Luminiscence',
            unity: 'lux'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Properties', null, {})
    }
}
