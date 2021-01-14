'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class watch extends Model {
        static associate ({
            Watch, Mechanism, Property, PropertiesWatch,
            Glass, Collection, Promo, Gender, WatchCase, Resistance,
            Bracelet, BraceletsWatch, Image, Calibre, CalibreWatch
        }) {
            Watch.belongsTo(Mechanism, { as: 'mechanisms', foreignKey: 'mechanismId' })
            Watch.belongsToMany(Property, { as: 'properties', foreignKey: 'watchId', through: PropertiesWatch })
            Watch.belongsToMany(Bracelet, { as: 'bracelets', foreignKey: 'watchId', through: BraceletsWatch })
            Watch.belongsToMany(Calibre, { as: 'calibres', foreignKey: 'watchId', through: CalibreWatch })
            Watch.belongsTo(Glass, { as: 'glass', foreignKey: 'glassId' })
            Watch.belongsTo(Collection, { as: 'collection', foreignKey: 'collectionId' })
            Watch.belongsTo(Promo, { as: 'promo', foreignKey: 'promoId' })
            Watch.belongsTo(Gender, { as: 'gender', foreignKey: 'genderId' })
            Watch.belongsTo(WatchCase, { as: 'case', foreignKey: 'caseId' })
            Watch.belongsTo(Resistance, { as: 'resistance', foreignKey: 'resistanceId' })
            Watch.hasMany(Image, { as: 'images', foreignKey: 'watchId' })
        }
    };
    watch.init({
        name: {
            type: DataTypes.STRING
        },
        slug: {
            type: DataTypes.STRING
        },
        collectionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Collections',
                key: 'id'
            }
        },
        mechanismId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'mechanisms',
                key: 'id'
            }
        },
        model: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.BIGINT,
            default: 0
        },
        stock: {
            type: DataTypes.INTEGER,
            default: 0
        },
        promoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Promos',
                key: 'id'
            }
        },
        discount: {
            type: DataTypes.INTEGER,
            default: 0
        },
        description: {
            type: DataTypes.TEXT
        },
        genderId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Genders',
                key: 'id'
            }
        },
        caseId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'WatchCases',
                key: 'id'
            }
        },
        resistanceId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Resistances',
                key: 'id'
            }
        },
        width: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        },
        thickness: {
            type: DataTypes.INTEGER
        },
        glassId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Glasses',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Watch'
    })
    return watch
}
