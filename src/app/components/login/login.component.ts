import { Component, OnInit } from '@angular/core';
import { environment} from '../../../environments/environment';
import { ApiServiceService } from '../../services/api-service.service';
import  alertify from 'alertify.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string
  password : string
  constructor(private api : ApiServiceService) { }

  ngOnInit() {

    
  }

  login(){
    let data = {
      "username" : this.username,
      "password" : this.password
    }
    this.api.login(data).subscribe((data)=>{
      alertify.success(data);
    },(error)=>{
      alertify.error(error.error.message);
    })  
  }
 

}
