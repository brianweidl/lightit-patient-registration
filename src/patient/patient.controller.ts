import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient-dto';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  private logger = new Logger(PatientController.name);

  @Post()
  async create(@Body() createPatientDto: CreatePatientDto) {
    try {
      const newPatient =
        await this.patientService.handleCreation(createPatientDto);
      return newPatient;
    } catch (error) {
      this.logger.error('Failed to create patient:', error);
      throw error;
    }
  }

  @Get()
  async findAll() {
    return this.patientService.findAll();
  }
}
