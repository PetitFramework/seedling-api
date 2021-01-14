Settings:
- Create .env and add your password 

##Model
```bash
sequelize model:generate --name sample --attributes name:string
```

##Migration
```bash
sequelize migration:generate --name sample
```

##Seed
```bash
sequelize seed:generate --name gender

```

##Controller
```js
const { Game } = require('../models')
const GameController = () => {
    const getGames = () => {

    }

    return {
        getGames
    }
}
module.exports = GameController
```

#How to Modify DB:

```bash
sequelize migration:generate --name add-category-type-to-category
```
