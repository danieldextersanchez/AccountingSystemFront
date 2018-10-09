import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from "../../services/api-service.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route : Router, private api : ApiServiceService) { }
 
  ngOnInit() {
    
    
  }

  navigate(route){
    this.route.navigate([route]);
  }

  logout(){
    this.api.logout().subscribe(data=>{
      console.log(data);
    })
  }


  

}
