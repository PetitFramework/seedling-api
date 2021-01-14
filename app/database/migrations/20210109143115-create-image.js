'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Images', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            watchId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Watches',
                    key: 'id'
                }
            },
            title: {
                type: Sequelize.STRING
            },
            src: {
                type: Sequelize.STRING
            },
            alt: {
                type: Sequelize.STRING
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Images')
    }
}
