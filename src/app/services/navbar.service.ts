import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs'

@Injectable()
export class NavbarService {
  private visible: BehaviorSubject<boolean>;
  

  constructor() {  this.visible = new BehaviorSubject<boolean>(false);}
  
  
  
   show() { 
     this.visible.next(true); 
    }

    hide() { 
      this.visible.next(false);
     }

  
     public getTheBoolean(): Observable<boolean> {
      return this.visible.asObservable();
     } 

}
