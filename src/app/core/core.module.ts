import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
  
    LoginComponent,
       HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
