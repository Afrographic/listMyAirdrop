import { Component, Input, OnInit } from '@angular/core';
import { sleep } from 'src/app/constant';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss']
})
export class TyperComponent implements OnInit {
  @Input() words = ["AirDrop", "ICO", "Token"]
  constructor() { }

  ngOnInit(): void {
    this.generateAnimation();
  }

  async generateAnimation() {
    let renderUI: any = document.querySelector(".renderUI");
    for (const word of this.words) {
      // revealing the word
      for (const letter of word) {
        renderUI.innerHTML += letter;
        await sleep(300);
      }
      await sleep(1300); 
      // deleting the word
      let i  = word.length;
      for (const letter of word) {
        renderUI.innerHTML = `${word.substring(0,i)}`;
        await sleep(100);
        i--;
      } 
      renderUI.innerHTML = '';   
      await sleep(300);
    } 
    // reload animation
    this.generateAnimation();
  }


  

}
