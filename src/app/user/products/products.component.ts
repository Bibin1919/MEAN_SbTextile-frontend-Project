import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  allproducts:any=[]

  constructor ( private api:ApiService ){}

  ngOnInit(): void {
    this.api.getallproducts().subscribe(
      (result:any)=>{
        console.log(result);
        this.allproducts = result
      }
    )
  }

}
