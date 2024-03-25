import { Component, Input, OnInit, HostListener, Renderer2, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtillService } from 'src/app/utility/utill.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title:string='Real Tasker'
  constructor(private route: ActivatedRoute,
     private utility:UtillService,
     private renderer: Renderer2,
      private router: Router) {
    //  this.utility.data$.subscribe(data => {this.title=data.title}) 
  }
 

  // for fixing navbar
  
 
  ngOnInit() { 
    
     
  }
  fixed: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log("log of scroll is working");  this scroll is working
    
   
    const navbar = document.querySelector('.header') as HTMLElement; // Cast to HTMLElement
    const navbarOffsetTop = navbar.getBoundingClientRect().top;
    if (window.scrollY > navbarOffsetTop) {
      this.renderer.addClass(navbar, 'fixed');
      this.fixed = true;
    } else {
      this.renderer.removeClass(navbar, 'fixed');
      this.fixed = false;
    }
  }
 
}
 

 