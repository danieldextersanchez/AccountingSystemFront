import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private nav : NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
