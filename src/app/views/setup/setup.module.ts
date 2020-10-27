import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { CountryComponent } from './country/country.component';
import { DesignationComponent } from './designation/designation.component';
import { JobTypeComponent } from './jobtype/jobtype.component';
import { PaycodeComponent } from './paycode/paycode.component';
import { RegionComponent } from './region/region.component';

import { SetupRoutingModule } from './setup-routing.module';

@NgModule({
    imports: [ SetupRoutingModule, CommonModule ],
    declarations: [
        CountryComponent,
        DesignationComponent,
        JobTypeComponent,
        PaycodeComponent,
        RegionComponent
    ]
})
export class SetupModule { }
