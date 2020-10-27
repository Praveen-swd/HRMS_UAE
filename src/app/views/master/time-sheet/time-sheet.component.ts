import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})
export class TimeSheetComponent implements OnInit {

  timesheets = [];
  countryCode: any;
  currencySymbol: any;
  TimeSheetDeatailsInfo: any = [];
  hideme = [];
  Index: any;
  countryId: any;
  country: any;
  priceToDisplay = [];

  constructor() { }

  ngOnInit(): void {
    this.timesheets =
    [
      {
        'EntryId' : '1',
        'Date' : '19-Oct-2020',
        'StartTime': '09:00 AM',
        'Break': '00:30',
        'EndTime': '06:30 PM',
        'Total' : '11:00',
        'TimeSheetDetails' : [
          {
            'Type' : 'General',
            'StartTime': '9:30 AM',
            'Break': '00:30',
            'EndTime': '06:30 PM',
            'Total' : '09:00',
          },
          {
            'Type' : 'OverTime',
            'StartTime': '6:30 PM',
            'Break': '00:00',
            'EndTime': '08:30 PM',
            'Total' : '02:00',
          },
        ]
      },
      {
        'EntryId' : '2',
        'Date' : '20-Oct-2020',
        'StartTime': '09:00 AM',
        'Break': '00:30',
        'EndTime': '06:30 PM',
        'Total' : '09:00',
        'TimeSheetDetails' : [
          {
            'Type' : 'General',
            'StartTime': '9:30 AM',
            'Break': '00:30',
            'EndTime': '06:30 PM',
            'Total' : '09:00',
          }
        ]
      }
    ];
  }

  public showTimeSheetDetailsInfo(index, EntryId) {
    this.TimeSheetDeatailsInfo = this.timesheets[index].TimeSheetDetails;
    this.Index = index;
    this.hideme[index] = !this.hideme[index];
  }
}
