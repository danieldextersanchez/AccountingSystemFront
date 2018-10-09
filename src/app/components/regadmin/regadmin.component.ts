import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ApiServiceService } from '../../services/api-service.service';
import  alertify from 'alertify.js';

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
  
  constructor(private api : ApiServiceService, private nav:NavbarService ) { }

  ngOnInit() {
    this.nav.show();
  }

  regadmin(){
    let data = {
      username : this.username,
      password : this.password,
      password_confirmation : this.confirm,
      email : this.email
    }
       
      this.showSpinner = true;
      this.api.regadmin(data).subscribe((data)=>{
        alertify.success(data["message"]);
        this.showSpinner = false;
      },(error)=>{
        alertify.logPosition("top center");
        alertify.error(this.api.errormessage(error));  
        this.showSpinner = false;
      })
    
    
  }

  listadmin(){
    
  }

}
