import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./project1/city-project/city-project.module').then(m => m.CityProjectModule) },
  { path: 'project2', loadChildren: () => import('./project2/project2/project2.module').then(m => m.Project2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
