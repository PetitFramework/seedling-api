'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class braceletsWatch extends Model {
        static associate (models) {}
    };
    braceletsWatch.init({
        watchId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'watches',
                key: 'id'
            }
        },
        braceletId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'bracelets',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'BraceletsWatch',
        timestamps: false
    })
    return braceletsWatch
}
