import { Component, OnInit } from '@angular/core';
import { ShearedService } from 'src/app/sheared/service/sheared.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  ProductsList:any=[]
  categories:any =[]
  specificCategory:any =[]
  loadingSpinner =false
  cartProduct:any[]=[]

  constructor(private service:ShearedService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategoriesName()
  }
getProducts(){
  this.service.getData().subscribe((res:any)=>{
    this.ProductsList=res
    this.loadingSpinner = false
  })
  
  this.loadingSpinner = true

}
getCategoriesName(){
this.service.getAllCategories().subscribe((res:any)=>{
  // this.loadingSpinner = true
  this.categories=res
})
// this.loadingSpinner = false

}


filterCategories(category :any){
  this.service.getDataCategories(category).subscribe((res:any)=>{
    this.specificCategory = res

  })

}
addToCart(event:any){
  if('cart' in localStorage){
    this.cartProduct = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProduct.find(item=>item.item.id==event.item.id)
    if(exist){
      alert('this Product is already in your cart')
    }
    else{
  this.cartProduct.push(event)
localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    }}
else{ 
  this.cartProduct.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProduct))
}
}

}
