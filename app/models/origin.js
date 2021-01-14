'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class origin extends Model {
        static associate ({ Origin, Calibre }) {
            Origin.hasMany(Calibre, { as: 'calibres', foreignKey: 'originId' })
        }
    };
    origin.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Origin',
        timestamps: false
    })
    return origin
}
