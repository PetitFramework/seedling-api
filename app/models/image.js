'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class image extends Model {
        static associate ({ Watch, Image }) {
            Image.belongsTo(Watch, { as: 'watches', foreignKey: 'watchId' })
        }
    };
    image.init({
        watchId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Watches',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING
        },
        src: {
            type: DataTypes.STRING
        },
        alt: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Image',
        timestamps: false
    })
    return image
}
