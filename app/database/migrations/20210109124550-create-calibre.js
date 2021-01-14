'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Calibres', {
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
            originId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Origins',
                    key: 'id'
                }
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Calibres')
    }
}
