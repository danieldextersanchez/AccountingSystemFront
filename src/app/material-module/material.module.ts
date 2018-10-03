import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormControl, Validators } from '@angular/forms'; 
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
