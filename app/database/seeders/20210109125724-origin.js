'use strict'

const { Origin } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Origin.create({
            code: 'ru',
            name: 'Russian',
            hide: false
        })
        await Origin.create({
            code: 'jp',
            name: 'Japanese',
            hide: false
        })
        await Origin.create({
            code: 'sw',
            name: 'Swiss',
            hide: false
        })
        await Origin.create({
            code: 'zh',
            name: 'female',
            hide: true
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Origins', null, {})
    }
}
