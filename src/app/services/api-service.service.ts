import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { token } from '../interface/api-interface';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json',"X-Requested-With": "XMLHttpRequest" }) };
  private authorizeduser = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token')  }) };

  userinfo : object  = {
      "accesstoken" : localStorage.getItem('token'),
      "info" : ""
  }
  constructor(private http : HttpClient) { }

  regadmin(data){
    return this.http.put(environment.apiurl+"admin",data,this._options);
  }

  listadmin(){
    return this.http.get(environment.apiurl+"admin");
  }

  login(data){
     return this.http.post(environment.apiurl+"auth/login",data,this._options).pipe(map(data =>{
         this.storetoken(data["access_token"])
     }));
  }

  logout(){
    localStorage.removeItem("token");
    return this.http.get(environment.apiurl+"auth/logout",this.authorizeduser);
  }

  storetoken(token){
    localStorage.setItem('token',token);
  }

  gettoken(){  
    return this.http.get(environment.apiurl+"auth/authuser",this.authorizeduser).toPromise().then(value=>{
      this.userinfo["info"] = value;
      return this.userinfo;
    },error=>{
      return false;
    });
  }

  isloggedin(){
    if(localStorage.getItem("token") != undefined){
      return true;
    }else{
      return false;
    }
  }

  errormessage(error){
    var message = "";
      message += "<div style='text-align:center;font-weight:bold'>"+ error.error.message+    "</div>";
      
      if(error.error.errors != undefined){
        var errors = Object.keys(error.error.errors);
        var errormessages = "<ul>";
        for(let i =0;i<errors.length;i++){
            errormessages += "<li>" + error.error.errors[errors[i]] +"</li>" ;
        }
        errormessages += "</ul";
        message += errormessages;
      }
      return message;
  }

  

}
