import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-regadmin',
  templateUrl: './regadmin.component.html',
  styleUrls: ['./regadmin.component.scss']
})
export class RegadminComponent implements OnInit {
  username : string;
  password : string;
  confirm : string;
  
  constructor(public nav: NavbarService, private api : ApiServiceService ) { }

  ngOnInit() {
    this.nav.show();
  }

  regadmin(){
    if(this.password != this.confirm){
      
    }
    
  }

  listadmin(){
    
  }

}
