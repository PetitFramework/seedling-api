'use strict'

const { Gender } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Gender.create({
            code: 'male',
            name: 'male'
        })
        await Gender.create({
            code: 'female',
            name: 'female'
        })
        await Gender.create({
            code: 'unisex',
            name: 'female'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Genders', null, {})
    }
}
