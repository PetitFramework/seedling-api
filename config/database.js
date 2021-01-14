require('dotenv').config()

module.exports = {
    development: {
        username: 'root',
        password: process.env.DEV_DB_PASSWORD,
        database: 'vostok',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false
    },
    test: {
        username: 'root',
        password: 'root',
        database: 'database_test',
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
}
