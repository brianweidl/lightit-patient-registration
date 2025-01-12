import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';
import { MediaModule } from 'src/media/media.module';
import { CommunicationsModule } from 'src/communications/communications.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Patient]),
    MediaModule,
    CommunicationsModule,
  ],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
