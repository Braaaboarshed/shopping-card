import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { ShearedModule } from './sheared/sheared.module';
import {RouterModule} from '@angular/router';
import { SpinnerComponent } from './sheared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShearedModule,
    ProductsModule,
    CartsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
