'use strict'

const { Image } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Image.create({
            watchId: 1,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-225a270.jpg'
        })
        await Image.create({
            watchId: 1,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-225d268.jpg'
        })
        await Image.create({
            watchId: 1,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-5601057.jpg'
        })
        await Image.create({
            watchId: 2,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-225a271.jpg'
        })
        await Image.create({
            watchId: 3,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-225c269.jpg'
        })
        await Image.create({
            watchId: 4,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-225d267.jpg'
        })
        await Image.create({
            watchId: 5,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-225d268.jpg'
        })
        await Image.create({
            watchId: 6,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-5601057.jpg'
        })
        await Image.create({
            watchId: 7,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-5601058.jpg'
        })
        await Image.create({
            watchId: 8,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-5601059.jpg'
        })
        await Image.create({
            watchId: 9,
            src: 'http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-5603061.jpg'
        })
        await Image.create({
            watchId: 10,
            src: ' http://vostok-europe.shop/wp-content/uploads/2020/01/vostok-europe-2426-5604240.jpg'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Images', null, {})
    }
}
