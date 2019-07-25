import { Component, OnInit } from '@angular/core';
import { faChevronUp, faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icon: IconDefinition;
  constructor() { }

  ngOnInit() {
    this.icon = faChevronUp;
  }


}
