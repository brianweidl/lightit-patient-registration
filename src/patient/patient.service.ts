import { Injectable, Logger } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient-dto';
import { InjectModel } from '@nestjs/sequelize';
import { Patient, PatientCreationAttributes } from './models/patient.model';
import { MediaService } from 'src/media/media.service';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient)
    private patientModel: typeof Patient,
    private mediaService: MediaService,
  ) {}
  private logger = new Logger(PatientService.name);
  async handleCreation(createPatientDto: CreatePatientDto): Promise<Patient> {
    const { name, email, address, phone, documentPhoto } = createPatientDto;
    const mediaPath = await this.mediaService.handleMedia(documentPhoto);

    const newPatient = await this.create({
      name,
      email,
      address,
      phone,
      documentPhotoPath: mediaPath,
    });

    return newPatient;
  }

  async create(patientPayload: PatientCreationAttributes): Promise<Patient> {
    return this.patientModel.create(patientPayload);
  }

  async findAll(): Promise<Patient[]> {
    return this.patientModel.findAll();
  }
}
