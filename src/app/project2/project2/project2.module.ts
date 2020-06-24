import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project2RoutingModule } from './project2-routing.module';
import { Project2Component } from './project2.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Project2Component],
  imports: [
    CommonModule,
    FormsModule,
    Project2RoutingModule
  ]
})
export class Project2Module { }
