'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Mechanisms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            code: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Mechanisms')
    }
}
