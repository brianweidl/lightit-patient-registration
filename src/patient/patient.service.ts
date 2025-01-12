import { Injectable, Logger } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient-dto';

@Injectable()
export class PatientService {
  private logger = new Logger(PatientService.name);
  async create(createPatientDto: CreatePatientDto): Promise<string> {
    console.log(createPatientDto);
    return 'Patient created';
  }
}
