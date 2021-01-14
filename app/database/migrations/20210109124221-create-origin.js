'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Origins', {
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
            },
            hide: {
                type: Sequelize.BOOLEAN,
                default: false
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Origins')
    }
}
