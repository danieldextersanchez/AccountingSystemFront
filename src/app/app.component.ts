import { Component, ChangeDetectorRef } from '@angular/core';
import { NavbarService } from './services/navbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    hide : boolean;
    navbar : boolean;
    constructor(public nav : NavbarService,private change :ChangeDetectorRef){

    }
    private _opened: boolean = false;
 
    private _toggleSidebar() {
      this._opened = !this._opened;
    }

    
    title = 'accounting';
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    ngOnInit(){
        this.nav.getTheBoolean().subscribe(data=>{
            this.navbar = data;
            this.change.detectChanges();
        })
           
        
      this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': -1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

    this.myParams = {
      particles: {
          number: {
              value: 200,
          },
          color: {
              value: '#ff0000'
          },
          shape: {
              type: 'triangle',
          },
  }
};
    }

    



   
    
}
