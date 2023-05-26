import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  /* form group */
  loginForm = this.loginFb.group({
    
    username:['',Validators.required],
    password:['',Validators.required]
  })
  
  constructor( private loginFb:FormBuilder, private api:ApiService, private contactRoute:Router ) {}

  login(){
    console.log('inside login function');
    
    if(this.loginForm.valid){
      console.log('inside if');
      
      let username = this.loginForm.value.username
      let password = this.loginForm.value.password
      
      /* api call for conytact feedback register */
      this.api.login(username,password)
      .subscribe((result:any)=>{
          console.log('hy');
        alert('Logged In')
        this.contactRoute.navigateByUrl('/user/admin-homepage')
      },
      (result:any)=>{  
        alert('Invalid Cardentials...')
        
      })
      
    }
    else{
      alert('Invalid Form')
    }
  }


}
