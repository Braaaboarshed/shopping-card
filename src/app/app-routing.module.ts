import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailesComponent } from './products/components/products-detailes/products-detailes.component';
import { SpinnerComponent } from './sheared/components/spinner/spinner.component';
import { HeaderComponent } from './sheared/components/header/header.component';
const routes: Routes = [
  {path:'',component:AllProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'details/:id',component:ProductsDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
