# Project Management

## Description

This project is a Node.js application using TypeScript, Express, and Mongoose. It includes API endpoints for managing products and orders, with proper validation using Zod and database interaction using Mongoose.

## Table of Contents

- [Project Management](#project-management)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Running the Project](#running-the-project)
  - [Scripts](#scripts)
    - [Available Scripts](#available-scripts)
  - [Configuration](#configuration)
    - [ESLint](#eslint)
    - [Prettier](#prettier)

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn (version 1.22 or higher)
- MongoDB (local or a cloud-based instance like MongoDB Atlas)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mongoose-assignment-2.git
   cd mongoose-assignment-2

    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project and add the following variables

   ```env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
   ```

## Usage

### Running the Project

**Development Mode**

To start the application in development mode with hot-reloading:

```bash
npm run start:dev
```

**Production Mode**

To build and start the application in production mode:

```bash
npm run build
npm run start:prod
```

## Scripts

### Available Scripts

- start:prod: Runs the compiled JavaScript code using Node.js.
- start:dev: Runs the application in development mode using ts-node-dev for hot-reloading.
- build: Compiles the TypeScript code into JavaScript.
- lint: Lints the codebase using ESLint.
- lint:fix: Automatically fixes linting issues.
- prettier: Formats the code using Prettier.
- prettier:fix: Automatically formats the code using Prettier.
- test: Placeholder for running tests.

## Configuration

### ESLint

To run ESLint and check for code quality issues:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

### Prettier

To format the codebase:

```bash
npm run prettier
```

To automatically fix formatting issues:

```bash
npm run prettier:fix
```
