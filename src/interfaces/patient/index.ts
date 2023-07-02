import { HospitalInterface } from 'interfaces/hospital';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  name: string;
  hospital_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  hospital?: HospitalInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  hospital_id?: string;
  user_id?: string;
}
