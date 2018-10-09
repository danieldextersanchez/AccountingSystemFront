import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: ApiServiceService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isloggedin()){
      return true;
    }else{
      this.myRoute.navigate([""]);
      return false;
    }
  }
}