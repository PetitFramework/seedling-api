'use strict'

const { WatchCase } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await WatchCase.create({
            code: 'stainlessSteel',
            name: 'нержавеющая сталь'
        })
        await WatchCase.create({
            code: 'bronze',
            name: 'бронза'
        })
        await WatchCase.create({
            code: 'titanium',
            name: 'титан'
        })
        await WatchCase.create({
            code: 'brass',
            name: 'латунь'
        })
        await WatchCase.create({
            code: 'alluminiumAlloy',
            name: 'алюминиевый сплав'
        })
        await WatchCase.create({
            code: 'mixedAlloy',
            name: 'комбинированный сплав'
        })
        await WatchCase.create({
            code: 'plastic',
            name: 'пластик'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('WatchCases', null, {})
    }
}
