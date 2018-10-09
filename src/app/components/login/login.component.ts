import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import  alertify from 'alertify.js';
import {Router} from '@angular/router'
import { finalize,take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  username : string
  password : string
  visible = false;
  
  
  constructor(private api : ApiServiceService, private route: Router) { }

  ngOnInit() {
    

    
  }

  login(){
    this.visible=true;
    let data = {
      username : this.username,
      password : this.password
    }

    let source = this.api.login(data).pipe(
      take(100),
      finalize(()=>{
        this.visible = false;
      })
    )
    source.subscribe(data=>{
      alertify.success("logged in");
      this.route.navigate(["regadmin"]);
    },error=>{
      alertify.error(this.api.errormessage(error));
    })
    
    



  }
 

}
