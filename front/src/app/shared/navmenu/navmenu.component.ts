import { Component, OnInit } from '@angular/core';
import { faPhone, faMailBulk, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faPlus = faPlus;
  constructor() { }

  ngOnInit() {
  }

}
