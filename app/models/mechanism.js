'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class mechanism extends Model {
        static associate ({ Mechanism, Watch, MechanismsWatch }) {
            Mechanism.hasMany(Watch,
                { as: 'watches', foreignKey: 'mechanismId' })
        }
    };
    mechanism.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Mechanism',
        timestamps: false
    })
    return mechanism
}
