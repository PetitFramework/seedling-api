'use strict'

const { Bracelet } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Bracelet.create({
            name: 'Brazalete Cuero',
            image: 'https://picsum.photos/200/300'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Bracelets', null, {})
    }
}
