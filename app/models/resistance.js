'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class resistance extends Model {
        static associate ({ Resistance, Watch }) {
            Resistance.hasMany(Watch, { as: 'watches', foreignKey: 'resistanceId' })
        }
    };
    resistance.init({
        code: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Resistance',
        timestamps: false
    })
    return resistance
}
