'use strict'

const { PropertiesWatch } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await PropertiesWatch.create({
            watchId: 1,
            propertyId: 1,
            value: '300'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PropertiesWatches', null, {})
    }
}
