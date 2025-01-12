import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient/models/patient.model';
import { MediaModule } from './media/media.module';
import { CommunicationsModule } from './communications/communications.module';

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
    MediaModule,
    CommunicationsModule,
  ],
})
export class AppModule {}
