'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class calibreWatch extends Model {
        static associate (models) {
            // define association here
        }
    };
    calibreWatch.init({
        watchId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'watches',
                key: 'id'
            }
        },
        calibreId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'calibres',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'CalibreWatch',
        timestamps: false
    })
    return calibreWatch
}
