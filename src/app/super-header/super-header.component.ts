import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss']
})
export class SuperHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.stickHeader();
  }

  stickHeader() {
    console.log("Attach scroll");
    let bodyTag: any = document.querySelector("body");
    let header: any = document.querySelector(".super_header");
    bodyTag.addEventListener('scroll', function (e: any) {

      if (bodyTag.scrollTop > 1) {
        //    show the header
        header.classList.add("AbsolutePos_shadow");
      } else {
        //    Hide the header
        header.classList.remove("AbsolutePos_shadow");
      }
    });
  }

  // Open and close Menu

  openMenu() {
    let sideMenu: any = document.querySelector("#SideMenu");
    sideMenu.classList.add("active");
  }
  closeMenu() {
    let sideMenu: any = document.querySelector("#SideMenu");
    sideMenu.classList.remove("active");
  }

}
