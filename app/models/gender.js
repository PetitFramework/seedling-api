'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class gender extends Model {
        static associate ({ Gender, Watch }) {
            Gender.hasMany(Watch, { as: 'watches', foreignKey: 'genderId' })
        }
    };
    gender.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Gender',
        timestamps: false
    })
    return gender
}
