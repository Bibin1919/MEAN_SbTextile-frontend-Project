import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit{

  
  allproducts:any=[]

  constructor(private api:ApiService){}

  removeItem(_id:any){
    this.api.removeproductitem(_id).subscribe(
      (result:any)=>{
        this.allproducts = result
      },
      (result:any)=>{
        alert(result.console.error);
        
      }
      )
  }


  ngOnInit(): void {
    this.api.getallproducts().subscribe(
      (result:any)=>{
        console.log(result);
        this.allproducts = result
      }
    )
  }
}
