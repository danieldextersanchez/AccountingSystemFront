import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material-module/material.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes, Router  } from "@angular/router";
import { environment } from "../environments/environment";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegadminComponent } from './components/regadmin/regadmin.component';
import { ParticlesModule } from 'angular-particle';

import { NavbarService} from './services/navbar.service';

const Routes : Routes = [
  {path : "", component: LoginComponent },
  {path : "regadmin", component : RegadminComponent},
  {path : "**", component: NotfoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent,
    RegadminComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(Routes),
    ParticlesModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
