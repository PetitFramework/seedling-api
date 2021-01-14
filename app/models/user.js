'use strict'
const { Model } = require('sequelize')
const { ValidationException } = require('./../exceptions')
const MIN_LENGTH_NAME = 3

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate ({ User, Role, RefreshToken }) {
            User.belongsTo(Role, { as: 'role', foreignKey: 'roleId' })
            User.hasMany(RefreshToken, { as: 'token', foreignKey: 'userId' })
        }
    }

    User.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING(16),
            unique: true,
            validate: {
                isShort (name) {
                    if (name.length < MIN_LENGTH_NAME) throw new ValidationException(`Name must be minimum ${MIN_LENGTH_NAME} characters long`)
                }
            }
        },
        surname: DataTypes.STRING,
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        recoverToken: DataTypes.STRING,
        expireRecover: DataTypes.DATE,
        lastAttempt: DataTypes.DATE,
        attempts: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        roleId: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            references: {
                model: 'Roles',
                key: 'id'
            }
        }
    }, {
        hooks: {},
        sequelize,
        modelName: 'User'
    })

    return User
}
