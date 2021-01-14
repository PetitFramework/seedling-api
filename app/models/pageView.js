'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class PageView extends Model {
        static associate () {
        }
    }
    PageView.init({
        userId: {
            allowNull: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        url: {
            allowNull: false,
            type: DataTypes.STRING
        },
        visitedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'PageView'
    })
    return PageView
}
