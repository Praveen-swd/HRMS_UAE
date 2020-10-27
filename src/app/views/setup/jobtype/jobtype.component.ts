import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { IJobType } from './jobtype';

@Component({
  selector: 'app-jobtype',
  templateUrl: './jobtype.component.html',
  styleUrls: ['./jobtype.component.css']
})
export class JobTypeComponent implements OnInit {
  jobType: IJobType[];
  // jobTypes: IJobType[];

  constructor() { }

  ngOnInit(): void {
    // this.p
    this.jobType = [{
      'jobTypeId' : 1,
      'jobTypeName': 'Shift',
      'description': 'General Shift'
    },
    {
      'jobTypeId' : 2,
      'jobTypeName': 'OT',
      'description': 'Workshop Overtime'
    },
    {
      'jobTypeId' : 3,
      'jobTypeName': 'OOF',
      'description': 'Onboard Travel/ Waiting'
    },
    {
      'jobTypeId' : 4,
      'jobTypeName': 'WFH',
      'description': 'Onboard working'
    }
  ];
  }
}
