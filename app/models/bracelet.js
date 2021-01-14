'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class bracelet extends Model {
        static associate ({ Watch, Bracelet, BraceletsWatch }) {
            Bracelet.belongsToMany(Watch, { as: 'watches', foreignKey: 'braceletId', through: BraceletsWatch })
        }
    };
    bracelet.init({
        name: DataTypes.STRING,
        image: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Bracelet',
        timestamps: false
    })
    return bracelet
}
