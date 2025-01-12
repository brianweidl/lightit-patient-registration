import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import * as bodyParser from 'body-parser';

async function connectToDatabase(app: INestApplication, logger: Logger) {
  const sequelize = app.get(Sequelize);

  const maxRetries = 5;
  const retryDelay = 3000;

  let retries = maxRetries;

  while (retries > 0) {
    try {
      await sequelize.authenticate();
      logger.log('Database connection established.');
      break;
    } catch (err) {
      retries -= 1;
      logger.error(`Failed to connect to the database.`, err.message);
      if (retries === 0) {
        logger.error('Maximum retries reached. Exiting...');
        process.exit(1); // Exit the process if all retries fail
      }
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
  await sequelize.sync({
    alter: true,
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  app.useGlobalPipes(new ValidationPipe({}));

  app.use(bodyParser.json({ limit: '10mb' }));

  await connectToDatabase(app, logger);

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT, () => logger.log(`Server is running on port ${PORT}`));
}
bootstrap();
