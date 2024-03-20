import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

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