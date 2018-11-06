import {Component} from '@angular/core';
import {EthcontractService} from "../../services/eth-contract.service";
import {Examination} from "../examination-request/examination-request.component";


export interface Patient {
  address?: string;
  name?: string;
  exams?: Examination[];
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
      exams: [
        {
          name: 'bood check',
          result: 'Abnormal',
          cost: 150,
          status: true,
        },
        {
          name: 'skin check',
          result: 'normal',
          cost: 250,
          status: true,
        },
      ]
    },
    {
      address: 'Nguyen Thai Son',
      name: 'Kiet Pham',
      exams: [],
    },
    {
      address: 'Cong Hoa',
      name: 'Khanh Nguyen',
      exams: [],
    }
  ];

  acctInfo: any;
  error: any;
  currentExams = [];
  constructor( private ethcontractService: EthcontractService ){
    this.initAndDisplayAccount();
  }

  initAndDisplayAccount() {
    const that = this;
    this.ethcontractService.getAccountInfo().then(function(acctInfo : any){
      that.acctInfo =  acctInfo;
    }).catch(function(error){
      that.error =  error;
    });
  };

  createPatient(name: string, address: string) {
      this.patientList.push({
        address: address,
        name: name,
        exams: []
      })
  }
}
