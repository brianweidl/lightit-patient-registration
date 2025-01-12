import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';
import { MediaModule } from 'src/media/media.module';

@Module({
  imports: [SequelizeModule.forFeature([Patient]), MediaModule],
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService],
})
export class PatientModule {}
