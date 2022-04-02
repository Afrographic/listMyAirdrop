import { Component, OnInit } from '@angular/core';
import { isInViewport } from '../constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showDivWhenVisible();
  }

  showDivWhenVisible() {
    const box:any = document.querySelector('#dashBoard');
    const body:any = document.querySelector('body');
    body.addEventListener('scroll', function () {
      console.log("logo");
      console.log(isInViewport(box));
    }, {
      passive: true
    });
  }

}
