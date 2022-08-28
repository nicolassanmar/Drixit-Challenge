# Drixit Challenge Backend

## Description

This is the backend solution for the Drixit Fullstack Challenge. It is a REST API that allows certain users to log in and get their user info.

## Requirements

This solution uses node v16.17.0 and npm v8.18.0. It is recommended to use these versions to run the project, but using the latests versions should also work.

Some utility scripts make use of docker and docker-compose commands to create a local MongoDB instance. If you don't have these installed, you can still run the project, but you will have to provide your own MongoDB instance.

## Design decisions

This project was built with the [Nest](https://github.com/nestjs/nest) framework in TypeScript, using express.js as the underlying layer. This was done because this framework provides a lot of features that make it easy to build a scalable and maintainable backend. The project is structured in a way that makes it easy to add new features and to maintain the existing ones.

The project was built using TDD, with the help of Jest and Supertest. This allowed me to write the code in a way that I could make sure the API was developed according to the requirements. The tests are run with a sample database in a docker container so they can be run in any environment.

The project uses [Mongoose](https://mongoosejs.com/) to interact with the MongoDB database. This is a popular library that makes it easy to define schemas and models, and to interact with the database. TypeORM and Prisma are also good alternatives, but they do not provide full support for MongoDB.

The project uses [Passport](http://www.passportjs.org/) to handle authentication. This is a popular library that makes it easy to add different authentication strategies. It also provides a middleware that can be used to protect routes. This project uses the [passport-local](http://www.passportjs.org/packages/passport-local/) strategy to authenticate users with email and password, and the [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) strategy to guard routes that require authentication (such as `GET /users/me`).

The JWT strategy is configured to use a secret key to sign the tokens, this is not the best way to do it, but it is the easiest to implement. A better way would be to use a public/private key pair, but this would require more configuration and would make the project more complex.

## Installation

```bash
$ npm install
```

## Deploy locally

The following command will deploy the backend application as well as a local instance of MongoDB (with docker), seeded with the users found in the challenge. It will also deploy an instance of mongo-express, a web interface to manage the database, at [http://localhost:8081/](http://localhost:8081/).

```bash
$ npm run start:local
```

## Testing

Acceptance E2E tests are written with [Jest](https://jestjs.io/). These tests are based on the challenge requirements, using the contents of the users.ts file. A utility command to run a seeded To run the tests, run the following command:

```bash
$ npm run test:acceptance
```
