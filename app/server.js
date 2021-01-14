const app = require('./app')
const PORT = 3027
const { sequelize } = require('./models')

app.listen(PORT, () => {
    sequelize.authenticate().then(async () => {
        console.info('Connection established with the database %o', PORT)
    })
})
