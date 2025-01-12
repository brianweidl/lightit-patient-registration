import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

export type PatientAttributes = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type PatientCreationAttributes = Omit<PatientAttributes, 'id'>;

@Table
export class Patient extends Model<Patient> {
  @Column({ type: DataTypes.STRING })
  name: string;

  @Column({ type: DataTypes.STRING })
  email: string;

  @Column({ type: DataTypes.STRING })
  phone: string;

  @Column({ type: DataTypes.STRING })
  address: string;
}
