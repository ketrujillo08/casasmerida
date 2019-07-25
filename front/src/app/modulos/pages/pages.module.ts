import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsComponent } from './us/us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment';
import { MapaComponent } from './home/mapa/mapa.component';

@NgModule({
  declarations: [HomeComponent, ContactComponent, UsComponent, MapaComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: environment.APIKEYMAPS
    })
  ]
})
export class PagesModule { }
