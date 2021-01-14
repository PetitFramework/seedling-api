'use strict'

const faker = require('faker')
const { Role } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Role.create({
            name: 'Usuario',
            code: 'default',
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent()
        })
        await Role.create({
            name: 'Admin',
            code: 'admin',
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent()
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Roles', null, {})
    }
}
