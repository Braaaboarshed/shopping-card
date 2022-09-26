import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ShearedModule } from '../sheared/sheared.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ShearedModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule

  ],
  exports:[
    CartComponent,
  ]
})
export class CartsModule { }
