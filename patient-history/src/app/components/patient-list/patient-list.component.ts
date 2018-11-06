import { Component } from '@angular/core';

export interface Patient {
  address?: string;
  name?: string;
}


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})

export class PatientList {
  patientList: Patient[] = [
    {
      address: 'Duong Quang Ham',
      name: 'Hoan Nguyen',
    },
    {
      address: 'Nguyen Thai Son',
      name: 'Kiet Pham',
    },
    {
      address: 'Cong Hoa',
      name: 'Khanh Nguyen',
    }
  ]

  createPatient(name: string, address: string) {
      this.patientList.push({
        address: address,
        name: name,
      })
  }
}
