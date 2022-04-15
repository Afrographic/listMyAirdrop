
import { sleep } from 'src/app/constant';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validator } from '../tools/validator';


@Component({
  selector: 'app-create-air-drop',
  templateUrl: './create-air-drop.component.html',
  styleUrls: ['./create-air-drop.component.scss']
})
export class CreateAirDropComponent implements OnInit {
  createAirDropActive = false;
  ngOnInit(): void {

  }


  openCreateAirDropActive() {
    this.createAirDropActive = true;
  }
  closeCreateAirDropActive() {
    this.createAirDropActive = false;
  }


}


