import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allContacts:any=[]

  downloadPdf(): void {
    const link = document.createElement('a');
    link.href = '/assets/example.pdf'; // Replace with the actual path to your PDF file
    link.download = 'example.pdf'; // Replace with the desired filename for the downloaded file
    link.target = '_blank';
    link.click();
  }

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getallcontacts().subscribe(
      (result:any)=>{
        console.log(result);
        this.allContacts = result
      }
    )
  }
}
