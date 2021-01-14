'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class watchCase extends Model {
        static associate ({ WatchCase, Watch }) {
            WatchCase.hasMany(Watch, { as: 'watches', foreignKey: 'caseId' })
        }
    };
    watchCase.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'WatchCase',
        timestamps: false
    })
    return watchCase
}
