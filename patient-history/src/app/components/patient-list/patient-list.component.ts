import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientList {
  patientList = [
    {
      address: 'Duong Quang Ham',
      name: 'Hoan Nguyen',
      examinations: []
    },
    {
      address: 'Nguyen Thai Son',
      name: 'Kiet Pham',
      examinations: []
    },
    {
      address: 'Cong Hoa',
      name: 'Khanh Nguyen',
      examinations: []
    }
  ]

  createPatient(name: string, address: string) {
      this.patientList.push({
        address: address,
        name: name,
      })
  }
}
