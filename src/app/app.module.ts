import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material-module/material.module";
import { FormsModule } from '@angular/forms';
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
import { AuthGuard } from './services/auth.guard';

import { HttpClientModule   } from '@angular/common/http';
import { LoadspinnerComponent } from './components/loadspinner/loadspinner.component';
import { ProductsComponent } from './components/products/products.component';

const Routes : Routes = [
  {path : "", component: LoginComponent },
  {path : "regadmin", component : RegadminComponent, canActivate: [AuthGuard]},
  {path : "products", component : ProductsComponent, canActivate: [AuthGuard]},
  {path : "**", component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent,
    RegadminComponent,
    LoadspinnerComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(Routes),
    ParticlesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NavbarService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
