import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  
  allshops:any=[]

  constructor ( private api:ApiService ){}

  ngOnInit(): void {
    this.api.getallshops().subscribe(
      (result:any)=>{
        console.log(result);
        this.allshops = result
      }
    )
  }

}
