import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee/employee.component';
import { PayscaleComponent } from './payscale/payscale.component';
import { ProjectComponent } from './project/project.component';

import { MasterRoutingModule } from './master-routing.module';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

@NgModule({
  imports: [ MasterRoutingModule, CommonModule ],
  declarations: [
    EmployeeComponent,
    PayscaleComponent,
    ProjectComponent,
    TimeSheetComponent
  ]
})
export class MasterModule { }
