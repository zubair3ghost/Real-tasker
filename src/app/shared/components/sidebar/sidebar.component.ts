import { Component, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';



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
  burger: boolean = true
  cross:boolean=false
  show:boolean = false
  toggle() {
     this.burger=!this.burger
     this.show=!this.show
     
  }








  

}
