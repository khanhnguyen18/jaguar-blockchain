import {Component} from '@angular/core';
import {EthcontractService} from "../../services/eth-contract.service";


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
  ];

  acctInfo: any;
  error: any;

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
      })
  }
}
