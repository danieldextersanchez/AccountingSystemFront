import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-regadmin',
  templateUrl: './regadmin.component.html',
  styleUrls: ['./regadmin.component.scss']
})
export class RegadminComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
