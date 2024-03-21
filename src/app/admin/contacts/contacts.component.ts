import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtillService } from 'src/app/utility/utill.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
titile:any=""
  constructor(private activeRoute:ActivatedRoute, private utility:UtillService) {

    this.activeRoute.data.subscribe((res:any)=>{
    this.titile=res.title
    })
    this.utility.setData(this.titile)
   }

  ngOnInit(): void {
  }
  formsubmit(value:any){
    console.log("value of form  submit" ,this.contactform.value);
    
  }

  // this is reactive form input validation and values
   contactform=new FormGroup({
    firstname:new FormControl('',[Validators.required,]),
    lastname:new FormControl('',[Validators.required,]),
      email:new FormControl('',[Validators.required,]),
      number:new FormControl('',[Validators.required,]),
      date:new FormControl('',[Validators.required,]),
      gender:new FormControl('',[Validators.required,]),
      pic:new FormControl('',[Validators.required,]),
   })
  }