'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Watches', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            slug: {
                type: Sequelize.STRING
            },
            collectionId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Collections',
                    key: 'id'
                }
            },
            model: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.BIGINT,
                default: 0
            },
            stock: {
                type: Sequelize.INTEGER,
                default: 0
            },
            promoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Promos',
                    key: 'id'
                }
            },
            discount: {
                type: Sequelize.INTEGER,
                default: 0
            },
            description: {
                type: Sequelize.TEXT
            },
            genderId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Genders',
                    key: 'id'
                }
            },
            mechanismId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Mechanisms',
                    key: 'id'
                }
            },
            caseId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'WatchCases',
                    key: 'id'
                }
            },
            resistanceId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Resistances',
                    key: 'id'
                }
            },
            width: {
                type: Sequelize.INTEGER
            },
            height: {
                type: Sequelize.INTEGER
            },
            thickness: {
                type: Sequelize.INTEGER
            },
            glassId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Glasses',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Watches')
    }
}
