# Drixit Challenge frontend

## Description

This is the frontend part of the Drixit Challenge Fullstack solution. It is a React application that allows users to log in and see their user info.

## Requirements

This solution uses node v16.17.0 and npm v8.18.0. It is recommended to use these versions to run the project, but using the latests versions should also work.

## Design decisions

This project was created using vite and React in TypeScript. [Vite](https://vitejs.dev/) was used because it is a fast and lightweight development server that allows for fast development and hot reloading. [TailwindCSS](https://tailwindcss.com/) was used because it provides a fast way to style components while owning a small footprint, and makes personalization easier than using libraries like MUI or Bootstrap. [React Query](https://react-query.tanstack.com/) was used to handle the data fetching and caching. It is a very lightweight library that provides a lot of functionality out of the box.
[Jotai](https://jotai.pmnd.rs/) was used to handle the state management. It is an small library that provides atomic state management, similar to Recoil but simpler.

For simplicity the JWT was stored in local storage, this is not a good practice for production applications since it is vulnerable to XSS attacks. A better solution would be to store the JWT in a HTTPOnly cookie, and use a refresh token to get a new JWT when the current one expires.

## Running the project

To run the project, first install the dependencies with `npm install`. Then run `npm start` to start the server. The project will be available at `localhost:4173`.
