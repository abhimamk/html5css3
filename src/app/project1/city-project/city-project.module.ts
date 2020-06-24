import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityProjectRoutingModule } from './city-project-routing.module';
import { CityProjectComponent } from './city-project.component';


@NgModule({
  declarations: [CityProjectComponent],
  imports: [
    CommonModule,
    CityProjectRoutingModule
  ]
})
export class CityProjectModule { }
