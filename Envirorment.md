Steps:
- Clone repository
-  Install dependencies: 
```
npm i
```
- Install MySQL for mac/windows:

Mac Sample
```
brew install mysql
```
```
  brew services start mysql
```
```
  mysql -u root
  CREATE DATABASE VOSTOK;
```

- Set file .env with following with the .env.example
- Migrate DB:
```
npm run db
```

- Done:
```
npm run dev
```

