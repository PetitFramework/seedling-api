'use strict'

const { Mechanism } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Mechanism.create({
            code: 'automatic',
            name: 'механические с автоподзаводом '
        })
        await Mechanism.create({
            code: 'quartz',
            name: 'кварцевые'
        })
        await Mechanism.create({
            code: 'mechanic',
            name: 'механические'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Mechanisms', null, {})
    }
}
