import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-shops',
  templateUrl: './admin-add-shops.component.html',
  styleUrls: ['./admin-add-shops.component.css']
})
export class AdminAddShopsComponent {

  /* form group */
  addshopForm = this.addshopFb.group({
    
    shopname:['',Validators.required],
    shopemail:['',Validators.required],
    shopphone:['',Validators.required],
    shopaddress:['',Validators.required],
    shopimageurl:['',Validators.required]
  })
  
  constructor( private addshopFb:FormBuilder, private api:ApiService, private addshopRoute:Router ) {}

  addshop(){
    console.log('inside addshop function');
    
    if(this.addshopForm.valid){
      console.log('inside if');
      
      let shopname = this.addshopForm.value.shopname
      let shopemail = this.addshopForm.value.shopemail
      let shopphone = this.addshopForm.value.shopphone
      let shopaddress = this.addshopForm.value.shopaddress
      let shopimageurl = this.addshopForm.value.shopimageurl
      
      /* api call for conytact feedback register */
      this.api.addshop(shopname,shopemail,shopphone,shopaddress,shopimageurl)
      .subscribe((result:any)=>{
        console.log('ss');
        
        alert('Error')
      },
      (result:any)=>{  
        alert('Item added Successfully...')
        this.addshopRoute.navigateByUrl('/user/admin-shops')
      })
      
    }
    else{
      alert('Invalid Form')
    }
  }

}
