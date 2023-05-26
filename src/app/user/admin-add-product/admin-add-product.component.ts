import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {

  
  /* form group */
  addproductForm = this.addproductFb.group({
    
    productname:['',Validators.required],
    smalldesc:['',Validators.required],
    subheading:['',Validators.required],
    description:['',Validators.required],
    imageurl:['',Validators.required]
  })
  
  constructor( private addproductFb:FormBuilder, private api:ApiService, private addproductRoute:Router ) {}

  addproduct(){
    console.log('inside addproduct function');
    
    if(this.addproductForm.valid){
      console.log('inside if');
      
      let productname = this.addproductForm.value.productname
      let smalldesc = this.addproductForm.value.smalldesc
      let subheading = this.addproductForm.value.subheading
      let description = this.addproductForm.value.description
      let imageurl = this.addproductForm.value.imageurl
      
      /* api call for conytact feedback register */
      this.api.addproduct(productname,smalldesc,subheading,description,imageurl)
      .subscribe((result:any)=>{
        alert('Error')
      },
      (result:any)=>{  
        alert('Item added Successfully...')
        this.addproductRoute.navigateByUrl('/user/admin-products')
      })
      
    }
    else{
      alert('Invalid Form')
    }
  }
}
