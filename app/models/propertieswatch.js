'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class propertiesWatch extends Model {
        static associate (models) {
            // define association here
        }
    };
    propertiesWatch.init({
        watchId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'watches',
                key: 'id'
            }
        },
        propertyId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'properties',
                key: 'id'
            }
        },
        value: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'PropertiesWatch',
        timestamps: false
    })
    return propertiesWatch
}
