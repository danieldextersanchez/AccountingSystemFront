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
    this.http.post(environment.apiurl+"admin",data,this._options).subscribe((data)=>{
      console.log(data); 
    })
  }

  listadmin(){
    this.http.get(environment.apiurl+"admin").subscribe((data)=>{
      console.log(data);
    })
  }
}
