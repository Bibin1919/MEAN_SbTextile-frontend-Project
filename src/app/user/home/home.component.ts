import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allproducts:any=[]

  /* form group */
  feedbackForm = this.feedbackFb.group({
    
    name:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    message:['',Validators.required]
  })
  
  constructor( private feedbackFb:FormBuilder, private api:ApiService, private feedbackRoute:Router ) {}

  feedback(){
    console.log('inside contact function');
    
    if(this.feedbackForm.valid){
      console.log('inside if');
      
      let name = this.feedbackForm.value.name
      let email = this.feedbackForm.value.email
      let phone = this.feedbackForm.value.phone
      let message = this.feedbackForm.value.message
      /* api call for conytact feedback register */
      this.api.feedback(name,email,phone,message)
      .subscribe((result:any)=>{
          console.log('hy');
        alert('added successfully')
      },
      (result:any)=>{  
        alert('Sent Successfully...')
       
      })
      
    }
    else{
      alert('Invalid Form')
    }
  }

  
  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = '/assets/example.pdf'; // Replace with the actual path to your PDF file
    link.download = 'example.pdf'; // Replace with the desired filename for the downloaded file
    link.target = '_blank';
    link.click();
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
