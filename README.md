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

## Testing the Application

To test that the patient registration is working as expected, you can send the following request to the endpoint:

**`POST http://localhost:3000/patient`**

```json
{
  "name": "Test",
  "phone": "+1-418-543-8090",
  "email": "<RECIPIENT_EMAIL>",
  "address": "Buenos Aires",
  "documentPhoto": "<BASE64_IMAGE>"
}
```

You can use a tool like Postman or any HTTP client to send this request.

### Notes

- Replace `<RECIPIENT_EMAIL>` with the email address where you want to send the test notification.
- Replace `<BASE64_IMAGE>` with a valid base64-encoded string representing the image of the document.
