import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShearedService {

  constructor(private http :HttpClient) {

   }
   getData(){
    return this.http.get('https://fakestoreapi.com/products')
   }

   getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
   }

  getDataCategories(category :any){
    return this.http.get('https://fakestoreapi.com/products/category/'+category)
    
  }
  getProductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }

}
