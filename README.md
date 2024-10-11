# Frontend Wisely Technical Test

## TO-DO App

To-Do CRUD Web APP to handle different tasks

## Features

- Create a task
- Get user tasks
- Update a task
- Delete a task

## Tech

- [Vue.js] - Vue.js v3.4.29
- [Axios] - fast node.js network app framework v4.21.1
- [Pinia] - Pinia v2.2.4

Repository: [repository]
on GitHub.

## Installation

It requires [Node.js](https://nodejs.org/) v22.8.0 to run.
If you have nvm installed you can do

```sh
nvm use
```

(there's a .nvmrc file that contains appropiate node version)

#### Don't forget to fill .ENV file

## There's a .env.example file but here's what you need

create a .env file and add the following variables:

PORT DEPENDS ON BACKEND PORT.

### EXAMPLE:

VITE_APP_BACKEND_URL=http://localhost:3000/api

Install the dependencies and devDependencies.

```sh
cd frontend-wisely
npm i
npm run dev
```

## License

MIT

[Vue.js]: https://vuejs.org/
[Pinia]: https://pinia.vuejs.org/
[Axios]: https://axios-http.com/es/docs/intro
[repository]: https://github.com/rubenromanvilasau/frontend-wisely
