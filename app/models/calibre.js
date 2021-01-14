'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class calibre extends Model {
        static associate ({ Calibre, Watch, CalibreWatch, Origin }) {
            Calibre.belongsToMany(Watch, { as: 'calibres', foreignKey: 'calibreId', through: CalibreWatch })
            Calibre.belongsTo(Origin, { as: 'origin', foreignKey: 'originId' })
        }
    };
    calibre.init({
        code: {
            unique: true,
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Calibre',
        timestamps: false
    })
    return calibre
}
