import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ApiServiceService } from '../../services/api-service.service';
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-regadmin',
  templateUrl: './regadmin.component.html',
  styleUrls: ['./regadmin.component.scss']
})

export class RegadminComponent implements OnInit {
  username : string;
  password : string;
  confirm : string;
  email : string;
  showSpinner : boolean = false;
  
  constructor(public nav: NavbarService, private api : ApiServiceService ) { }

  ngOnInit() {
    this.nav.show();
  }

  regadmin(){
    let data = {
      username : this.username,
      password : this.password,
      email : this.email
    }
    if(this.password == this.confirm){
      this.showSpinner = true;
      this.api.regadmin(data).subscribe((data)=>{
        alertify.success(data);
        this.showSpinner = false;
      },(error)=>{
        alertify.error(error.error.message);  
        this.showSpinner = false;
      })
    }
    
  }

  listadmin(){
    
  }

}
