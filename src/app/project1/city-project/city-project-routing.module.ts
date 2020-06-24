import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityProjectComponent } from './city-project.component';

const routes: Routes = [{ path: '', component: CityProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityProjectRoutingModule { }
