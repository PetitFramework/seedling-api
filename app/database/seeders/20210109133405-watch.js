'use strict'
const { Watch } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await createRaketa({
            name: '2426/225A270',
            model: '2426/225A270',
            price: 25260,
            description: 'Часы, выпущенные ограниченным тиражом всего в 500 экземпляров к 100-летнему юбилею Закона о радиорубке. Дизайн часов вдохновлен судовыми часами  «Восток — Радиорубка», которые уже несколько десятилей и вплоть до сегодняшнего дня используются на российских военно-морских судах.'
        })
        await createRaketa({
            name: '2426/225A271',
            model: '2426/225A271',
            price: 25560
        })
        await createRaketa({
            name: '2426/225C269',
            model: '2426/225C269',
            price: 28280
        })
        await createRaketa({
            name: '2426/225D267',
            model: '2426/225D267',
            price: 28280
        })
        await createRaketa({
            name: '2426/225D268',
            model: '2426/225D268',
            price: 28280
        })
        await createLimusine({
            name: '2426/5601057',
            model: '2426/5601057',
            price: 24840
        })
        await createLimusine({
            name: '2426/5601058',
            model: '2426/5601058',
            price: 24840
        })
        await createLimusine({
            name: '2426/5601059',
            model: '2426/5601059',
            price: 24840
        })
        await createLimusine({
            name: '2426/5603061',
            model: '2426/5603061',
            price: 27420
        })
        await createLimusine({
            name: '2426/5604240',
            model: '2426/5604240',
            price: 29140
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Watches', null, {})
    }
}

const createRaketa = async ({ name, model, price, description = 'description' }) => {
    await createWatch({
        name,
        model,
        price,
        collection: 5,
        description
    })
}

const createLimusine = async ({ name, model, price, description = 'description' }) => {
    await createWatch({
        name,
        model,
        price,
        description,
        collection: 10
    })
}

const createWatch = async ({ name, model, price, collection, description = 'description' }) => {
    await Watch.create({
        name,
        slug: model.replace('/', '-'),
        collectionId: collection,
        model,
        price,
        stock: 3,
        promoId: null,
        discount: 10,
        description,
        genderId: 1,
        mechanismId: 1,
        calibre: 'Восток 2426',
        caseId: 1,
        resistanceId: 1,
        width: 250,
        height: 250,
        thickness: 250,
        glassId: 1
    })
}
