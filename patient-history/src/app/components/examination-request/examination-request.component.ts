import {Component} from '@angular/core';

export interface Examination {
  name?: string;
  result?: string;
  cost?: number;
  status?: boolean;
}

@Component({
  selector: 'app-examination-request',
  templateUrl: './examination-request.component.html',
  styleUrls: ['./examination-request.component.scss']
})
export class ExaminationRequestComponent {
  examinationList: Examination[] = [
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
  ];
  createExam(name, result, cost, status) {
    this.examinationList.push({
      name: name,
      result: result,
      cost: cost,
      status: status,
    })
  }
}
