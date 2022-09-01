import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayPackageRoutingModule } from './holiday-package-routing.module';
import { HolidayPackageComponent } from './holiday-package.component';


@NgModule({
  declarations: [
    HolidayPackageComponent
  ],
  imports: [
    CommonModule,
    HolidayPackageRoutingModule
  ]
})
export class HolidayPackageModule { }
