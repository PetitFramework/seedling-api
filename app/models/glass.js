'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class glass extends Model {
        static associate ({ Glass, Watch }) {
            Glass.hasMany(Watch, { as: 'watches', foreignKey: 'glassId' })
        }
    };
    glass.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Glass',
        timestamps: false
    })
    return glass
}
