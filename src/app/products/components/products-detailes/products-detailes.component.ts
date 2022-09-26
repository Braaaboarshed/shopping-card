import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShearedService } from 'src/app/sheared/service/sheared.service';
@Component({
  selector: 'app-products-detailes',
  templateUrl: './products-detailes.component.html',
  styleUrls: ['./products-detailes.component.scss']
})
export class ProductsDetailesComponent implements OnInit {
    id:any
    singleProduct:any
  constructor(private route: ActivatedRoute,private service:ShearedService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    
    this.getSingleProduct(this.id)
  }

getSingleProduct(id:any){
  this.service.getProductById(id).subscribe(res=>{
    this.singleProduct=res
    
  })
}
}
