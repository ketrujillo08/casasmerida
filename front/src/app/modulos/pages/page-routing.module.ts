import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "nosotros", component: UsComponent },
  { path: "contacto", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
