'use strict'

const { Calibre } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Calibre.create({
            code: 'vostok-2426',
            name: 'Восток 2426',
            originId: 1
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Calibres', null, {})
    }
}
