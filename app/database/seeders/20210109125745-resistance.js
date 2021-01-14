'use strict'

const { Resistance } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Resistance.create({
            code: '3',
            name: '3'
        })
        await Resistance.create({
            code: '5',
            name: '5'
        })
        await Resistance.create({
            code: '10',
            name: '10'
        })
        await Resistance.create({
            code: '20',
            name: '20'
        })
        await Resistance.create({
            code: '30',
            name: '30'
        })
        await Resistance.create({
            code: '50',
            name: '50'
        })
        await Resistance.create({
            code: '100',
            name: '100'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Resistances', null, {})
    }
}
