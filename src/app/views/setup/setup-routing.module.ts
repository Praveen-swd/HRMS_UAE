import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent  } from './country/country.component';
import { DesignationComponent } from './designation/designation.component';
import { JobTypeComponent } from './jobtype/jobtype.component';
import { PaycodeComponent } from './paycode/paycode.component';
import { RegionComponent } from './region/region.component';


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Setup'
      },
      children: [
        {
          path: '',
          redirectTo: 'jobtype',
          pathMatch: 'full'
        },
        {
          path: 'country',
          component: CountryComponent,
          data: {
            title: 'Country'
          }
        },
        {
          path: 'designation',
          component: DesignationComponent,
          data: {
            title: 'Designation'
          }
        },
        {
          path: 'jobtype',
          component: JobTypeComponent,
          data: {
            title: 'JobType'
          }
        },
        {
          path: 'paycode',
          component: PaycodeComponent,
          data: {
            title: 'Paycode'
          }
        },
        {
          path: 'region',
          component: RegionComponent,
          data: {
            title: 'Region'
          }
        }
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SetupRoutingModule {}
