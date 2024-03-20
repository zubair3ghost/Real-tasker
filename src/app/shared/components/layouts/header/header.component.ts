import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    // console.log(data); 
    // abhi k liye baki styling kr   lo baad mai ajao ga
     
    console.log("heere is the message from the app routing se converter");
    
  }

}
