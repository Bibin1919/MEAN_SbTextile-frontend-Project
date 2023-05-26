import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  
  /* form group */
  contactForm = this.contactFb.group({
    
    name:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    company:['',Validators.required],
    business:['',Validators.required],
    message:['',Validators.required]
  })
  
  constructor( private contactFb:FormBuilder, private api:ApiService, private contactRoute:Router ) {}

  contact(){
    console.log('inside contact function');
    
    if(this.contactForm.valid){
      console.log('inside if');
      
      let name = this.contactForm.value.name
      let email = this.contactForm.value.email
      let phone = this.contactForm.value.phone
      let company = this.contactForm.value.company
      let business = this.contactForm.value.business
      let message = this.contactForm.value.message
      /* api call for conytact feedback register */
      this.api.contact(name,email,phone,company,business,message)
      .subscribe((result:any)=>{
          console.log('hy');
        alert('added successfully')
      },
      (result:any)=>{  
        alert('Sent Successfully...')
        this.contactRoute.navigateByUrl('/user')
      })
      
    }
    else{
      alert('Invalid Form')
    }
  }

}
