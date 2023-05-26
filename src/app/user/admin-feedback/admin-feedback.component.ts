import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent implements OnInit {

  allfeedbacks:any=[]

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getallfeedbacks().subscribe(
      (result:any)=>{
        console.log(result);
        this.allfeedbacks = result
      }
    )
  }
}
