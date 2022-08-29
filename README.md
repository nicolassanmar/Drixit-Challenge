# Drixit Challenge Fullstack

## Description

This is the solution for the Drixit Fullstack Challenge. It is a REST API that allows certain users to log in and get their user info, and a frontend application that allows users to log in and see their user info.

## Requirements

This solution uses node v16.17.0 and npm v8.18.0. It is recommended to use these versions to run the project, but using the latests versions should also work.

Some utility scripts in the backend solution make use of docker and docker-compose commands to create a local MongoDB instance. If you don't have these installed, you can still run the project, but you will have to provide your own MongoDB instance.

## Design decisions

These can be found in the `README.md` files inside each project (backend and frontend).

## Running the full solution

With docker-compose a containerized version of the backend and frontend applications can be deployed. This will also deploy a local instance of MongoDB, seeded with the users found in the challenge and mongo-express, a web interface to manage the database, at [http://localhost:8081/](http://localhost:8081/).

```bash
docker-compose up
```
