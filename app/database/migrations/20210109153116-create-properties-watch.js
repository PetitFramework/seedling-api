'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('PropertiesWatches', {
            watchId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'watches',
                    key: 'id'
                }
            },
            propertyId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'properties',
                    key: 'id'
                }
            },
            value: {
                type: Sequelize.STRING
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('PropertiesWatches')
    }
}
