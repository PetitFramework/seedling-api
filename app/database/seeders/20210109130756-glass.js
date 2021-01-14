'use strict'

const { Glass } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Glass.create({
            code: 'mineral',
            name: 'минеральное'
        })
        await Glass.create({
            code: 'zephyr',
            name: 'сапфировое'
        })
        await Glass.create({
            code: 'plastic',
            name: 'пластик'
        })
        await Glass.create({
            code: 'hardenedMineral',
            name: 'закаленное минеральное'
        })
        await Glass.create({
            code: 'hardenedMineralK1',
            name: 'закаленное минеральное K1'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Glasses', null, {})
    }
}
