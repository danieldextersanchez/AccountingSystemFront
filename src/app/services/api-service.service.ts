import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  constructor(private http : HttpClient) { }

  regadmin(data){
    return this.http.put(environment.apiurl+"admin",data,this._options);
  }

  listadmin(){
    return this.http.get(environment.apiurl+"admin");
  }

  login(data){
     return this.http.post(environment.apiurl+"auth/login",data,this._options);
  }
}
