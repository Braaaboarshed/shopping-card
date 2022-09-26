import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from '../products/products.module';
import { CartComponent } from '../carts/components/cart/cart.component';
import { CartsModule } from '../carts/carts.module';
import { AppModule } from '../app.module';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  HeaderComponent,
  SpinnerComponent,
  SelectComponent,
  
  ],
  imports: [
    CommonModule,
    // ProductsModule,
    // CartsModule,
    // RouterModule,
    HttpClientModule,
    FormsModule
    
  
    
  ],
  exports : [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule
    
    // ShearedModule
    
    
  ]
})
export class ShearedModule { }
