nest-pokedex
===

This is a pokedex api developed using the nest framework

## Start the project

To start using the project, you need to first install the depencies by running one of these, depending on the package manager you're using
+ `yarn`
+ `npm i`

Then, you need to boot the database with these command
```bash
docker-compose up -d
```

To generate the environment corresponding file, run
```bash
yarn generate-env
```
To generate the env file according to your environment

## Production build

1. create a `.env.prod` file
2. fill this file with these values:

```
MONGO_DB_URI=mongodb://localhost:27017/nest-pokemon
MONGO_DB=mongodb://mongo-poke:27017/nest-pokemon
PORT=3000
A_SECRET_KEY=secret
```
