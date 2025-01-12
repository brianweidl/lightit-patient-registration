import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient/models/patient.model';

@Module({
  imports: [
    PatientModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Patient],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
