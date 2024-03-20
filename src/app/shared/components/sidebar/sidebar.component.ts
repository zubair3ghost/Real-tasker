import { Component, OnInit,ElementRef, HostListener, Renderer2 } from '@angular/core';
 


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private renderer: Renderer2, 
    private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');

    if (window.pageYOffset > 100) {
      sidebar.classList.add('fixed-sidebar');
    } else {
      sidebar.classList.remove('fixed-sidebar');
    }
  }

}
