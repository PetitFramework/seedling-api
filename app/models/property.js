'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class property extends Model {
        static associate ({ Watch, Property, PropertiesWatch }) {
            Property.belongsToMany(Watch, { as: 'properties', foreignKey: 'propertyId', through: PropertiesWatch })
        }
    };
    property.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },

        unity: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Property',
        timestamps: false
    })
    return property
}
