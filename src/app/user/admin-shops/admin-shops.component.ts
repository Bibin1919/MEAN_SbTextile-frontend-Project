import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-shops',
  templateUrl: './admin-shops.component.html',
  styleUrls: ['./admin-shops.component.css']
})
export class AdminShopsComponent implements OnInit{

  allshops:any=[]

  constructor(private api:ApiService){}

  removeshop(_id:any){
    this.api.removeshop(_id).subscribe(
      (result:any)=>{
        this.allshops = result
      },
      (result:any)=>{
        alert(result.console.error);
        
      }
      )
  }

  ngOnInit(): void {
    this.api.getallshops().subscribe(
      (result:any)=>{
        console.log(result);
        this.allshops = result
      }
    )
  }

}
