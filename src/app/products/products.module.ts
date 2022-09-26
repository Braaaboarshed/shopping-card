import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailesComponent } from './components/products-detailes/products-detailes.component';

import { ShearedModule } from '../sheared/sheared.module';
import { SpinnerComponent } from '../sheared/components/spinner/spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailesComponent,
    ProductComponent,
    
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
    AllProductsComponent,
    ProductsDetailesComponent,
    
    
  ],
  providers: [],
})
export class ProductsModule { }
