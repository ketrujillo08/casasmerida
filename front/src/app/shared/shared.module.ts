import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavmenuComponent, FooterComponent],
  exports: [NavmenuComponent, FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
