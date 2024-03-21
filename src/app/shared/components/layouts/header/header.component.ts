import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { UtillService } from 'src/app/utility/utill.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title:string='Real Tasker'
 
  constructor(private route: ActivatedRoute, private utility:UtillService, private router: Router) {
    //  this.utility.data$.subscribe(data => {this.title=data.title}) 
  }

  
  ngOnInit(): void {

     
  }

}
