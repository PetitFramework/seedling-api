'use strict'

const { CalibreWatch } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await CalibreWatch.create({
            watchId: 1,
            calibreId: 1
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('CalibreWatches', null, {})
    }
}
