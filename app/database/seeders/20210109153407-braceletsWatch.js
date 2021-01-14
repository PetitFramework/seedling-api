'use strict'

const { BraceletsWatch } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await BraceletsWatch.create({
            watchId: 1,
            braceletId: 1
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('BraceletsWatches', null, {})
    }
}
