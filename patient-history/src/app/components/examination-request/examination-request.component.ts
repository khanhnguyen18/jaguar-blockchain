import {Component, Input} from '@angular/core';

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
  @Input() examinationList: Examination[];

  createExam(name, result, cost, status) {
    this.examinationList.push({
      name: name,
      result: result,
      cost: cost,
      status: status,
    })
  }
}
