# MS-EMAIL

Microservice for emails based on hexagonal architecture built with Node.js, Express, and TypeScript.

## Prerequisites

- Node.js (>= 22.x)
- npm (>= 10.x) or yarn (>= 1.x)

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/luismab95/workspace-ms-email.git
    cd your-project
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server, run:
```sh
npm run dev
# or
yarn dev
```

The server will start on `http://localhost:3000`.

### Building the Application

To build the project, run:
```sh
npm run build
# or
yarn build
```

### Running the Test

To start the test, run:
```sh
npm run test
# or
yarn test
```

The compiled JavaScript files will be in the `dist` directory.

### Project Structure

```
.
├── src
│   ├── application
│   │   ├── services
│   ├── domain
│   │   ├── entities
│   │   ├── repositories
│   ├── infrastructure
|   │   ├── adapters
|   │   ├── http
|   │   │   ├── controllers/
|   │   │   ├── routes/
|   │   │   ├── middlewares/
|   │   │   └── validators/
|   │   ├── persistence
|   │   │   ├── postgres/
│   ├── shared
│   └── index.ts
│   └── swagger.ts
├── tests
├── package.json
├── tsconfig.json
└── README.md
```

- `src/application`: Business logic.
  - `services`: Application services.
- `src/domain`: Domain logic.
  - `entities`: Domain entities.
  - `repositories`: Data access interfaces.
- `src/infrastructure`: Application infrastructure.
  - `adapters`: adapters request handling.
  - `http`: HTTP request handling.
    - `controllers`: Controllers to handle requests.
    - `routes`: Route definitions.
    - `middlewares`: Custom middleware functions.
    - `validators`: Request validation logic.
  - `persistence`: Data persistence.
    - `postgres`: PostgreSQL specific implementations.
- `src/shared`: Shared utilities and helpers.
- `src/index.ts`: Application entry point.
- `src/swagger.ts`: documentation with swagger.
- `tests`: Unit and integration tests.
- `package.json`: npm configuration file.
- `tsconfig.json`: TypeScript configuration.
- `README.md`: Project documentation.

### Scripts

- `dev`: Run the application in development mode.
- `build`: Compile TypeScript to JavaScript.
- `start`: Start the compiled application.
- `test`: Run unit test.

## License

This project is licensed under the MIT License.