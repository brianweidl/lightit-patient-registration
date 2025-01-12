FROM node:21

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "start:dev"]