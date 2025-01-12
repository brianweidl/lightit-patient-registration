# Patient Registration App

## Desciption

This application is a backend service for managing patient registrations, built with NestJS and Sequelize.

## Prerequisites

Before running the application, ensure that you have Docker installed on your system. If Docker is not installed, follow the [official Docker installation guide](https://docs.docker.com/get-docker/).

## Environment Variables

To configure the application, you need to provide the following environment variables in the docker-compose.yaml file:

```
- NODE_ENV=development
- PORT=3000
- DB_HOST=db
- DB_PORT=3306
- DB_USER=user
- DB_PASSWORD=password
- DB_NAME=patient_registration
- REDIS_PORT=6379
- REDIS_HOST=redis
- EMAIL_USER=<YOUR_EMAIL_USER>
- EMAIL_PASSWORD=<YOUR_EMAIL_APP_PASSWORD>
```

Replace `<YOUR_EMAIL_USER>` and `<YOUR_EMAIL_APP_PASSWORD>` with the credentials for your email provider.

## Running the Application

To build and start the containers, run the following command in the project directory:

```
docker compose up --build
```

This command will:

- Build the Docker images for the application and its dependencies.

- Start the application and its associated services (NestJS app, MySQL database and Redis).
