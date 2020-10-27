import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { PayscaleComponent } from './payscale/payscale.component';
import { ProjectComponent } from './project/project.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Master'
      },
      children: [
        {
          path: '',
          redirectTo: 'payscale',
          pathMatch: 'full'
        },
        {
          path: 'employee',
          component: EmployeeComponent,
          data: {
            title: 'Employee'
          }
        },
        {
          path: 'payscale',
          component: PayscaleComponent,
          data: {
            title: 'PayScale'
          }
        },
        {
          path: 'project',
          component: ProjectComponent,
          data: {
            title: 'Project'
          }
        },
        {
          path: 'time-sheet',
          component: TimeSheetComponent,
          data: {
            title: 'TimeSheet'
          }
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MasterRoutingModule {}
