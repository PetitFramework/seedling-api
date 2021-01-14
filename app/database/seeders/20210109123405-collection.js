'use strict'
const { Collection } = require('../../models')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Collection.create({
            name: 'Анчар',
            slug: 'anchar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/anchar-image.jpg',
            banDiscount: true,
            relevance: -100
        })
        await Collection.create({
            name: 'Ундина',
            slug: 'undina',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/undine-image.jpg',
            banDiscount: true,
            relevance: -1100
        })
        await Collection.create({
            name: 'Мрия',
            slug: 'mriya',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/mriya-image.jpg',
            banDiscount: true,
            relevance: -1000
        })
        await Collection.create({
            name: 'Экраноплан',
            slug: 'ekranoplan',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/ekranoplan-image.jpg',
            banDiscount: true,
            relevance: -400
        })
        await Collection.create({
            name: 'Ракета №1',
            slug: 'raketa-n1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/raketa-n1-image.jpg',
            banDiscount: true,
            relevance: -600
        })
        await Collection.create({
            name: 'Эверест',
            slug: 'everest',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/everest-image.jpg',
            banDiscount: true,
            relevance: -700
        })
        await Collection.create({
            name: 'Алмаз',
            slug: 'almaz',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            banDiscount: true,
            relevance: -900,
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/almaz-image.jpg'

        })
        await Collection.create({
            name: 'Энергия',
            slug: 'energy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            banDiscount: true,
            relevance: -800,
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/energia-image.jpg'
        })
        await Collection.create({
            name: 'Луноход-2',
            slug: 'lunokhod-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            banDiscount: true,
            relevance: -200,
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/lunokhod-2-image.jpg'
        })
        await Collection.create({
            name: 'ГАЗ-14 Лимузин',
            slug: 'limousine',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            banDiscount: true,
            relevance: -300,
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/limousine-image.jpg'
        })
        await Collection.create({
            name: 'Экспедиция',
            slug: 'expedition',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra. Sit amet justo donec enim diam. Massa massa ultricies mi quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Elementum sagittis vitae et leo duis ut diam quam. Massa tincidunt dui ut ornare lectus sit amet est. Diam vel quam elementum pulvinar etiam non quam. Nibh mauris cursus mattis molestie a iaculis.',
            banDiscount: true,
            relevance: -500,
            image: 'http://vostok-europe.shop/wp-content/uploads/2019/12/expedition-image.jpg'
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Collections', null, {})
    }
}
