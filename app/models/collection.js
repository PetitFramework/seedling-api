'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class collection extends Model {
        static associate ({ Collection, Watch }) {
            Collection.hasMany(Watch, { as: 'watches', foreignKey: 'collectionId' })
        }
    };
    collection.init({
        slug: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING
        },
        relevance: {
            type: DataTypes.INTEGER
        },
        banDiscount: {
            type: DataTypes.BOOLEAN
        }
    }, {
        sequelize,
        modelName: 'Collection'
    })
    return collection
}
