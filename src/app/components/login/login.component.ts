import { Component, OnInit } from '@angular/core';
import { environment} from '../../../environments/environment';
import { ApiServiceService } from '../../services/api-service.service';
import  alertify from 'alertify.js';
import { token } from '../../interface/api-interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  username : string
  password : string
  visible = false;
  
  
  constructor(private api : ApiServiceService) { }
  
  ngOnInit() {

    
  }

  login(){
    console.log(this.api.gettoken());
  }
 

}
