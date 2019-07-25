import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './modulos/pages/pages.component';

const routes: Routes = [
  { path: "", component: PagesComponent, loadChildren:"./modulos/pages/pages.module#PagesModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
