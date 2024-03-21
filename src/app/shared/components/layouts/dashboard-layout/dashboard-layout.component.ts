import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router, RoutesRecognized } from '@angular/router';
import { UtillService } from 'src/app/utility/utill.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  title = ''; // Corrected variable name and data structure

  constructor(private utility: UtillService, private router: Router) {
    // this.utility.setData({ title: this.title }); // Sending data as an object with title property
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      window.scrollTo(0, 0)
      // console.log(data);
      if (data instanceof ActivationStart) {
        const obj: any = data.snapshot.data;
        this.title=obj.title;
        // if (Object.keys(obthj).length !== 0) {
        console.log( this.title);
        //   // this.routeData = obj;
        // } else {
        //   // this.routeData = showIncludes.showSharedComps;
        // }
        // this.cdr.detectChanges();
      }
    });
  }

}
