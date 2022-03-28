import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  words = ["AirDrop", "ICO", "Token"];

  constructor() { }

  ngOnInit(): void {

  }

 

}
