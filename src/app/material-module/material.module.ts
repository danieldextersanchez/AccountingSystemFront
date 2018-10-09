import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
// import { FormControl, Validators } from '@angular/forms'; 
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule,
    SidebarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    SidebarModule,
    
  ],
  declarations: []
})
export class MaterialModule { }
