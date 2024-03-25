import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs';
import { UtillService } from 'src/app/utility/utill.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  title = ''; // Corrected variable name and data structure
  showHeader: boolean=true;

  constructor(private utility: UtillService, 
    private router: Router,
     private activatedRoute: ActivatedRoute
    ) {
    // this.utility.setData({ title: this.title }); // Sending data as an object with title property
  }
  ngOnInit(): void {
    console.log("thsis is home condloke");
    
    

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Accessing the data property directly to check if showHeader is set
      this.showHeader = !this.activatedRoute.firstChild?.snapshot.data['showHeader'];
    });
  } 

}
