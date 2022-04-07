import { Component, Input, OnInit } from '@angular/core';

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
        await this.sleep(300);
      }
      await this.sleep(1300); 
      // deleting the word
      let i  = word.length;
      for (const letter of word) {
        renderUI.innerHTML = `${word.substring(0,i)}`;
        await this.sleep(100);
        i--;
      } 
      renderUI.innerHTML = '';   
      await this.sleep(300);
    } 
    // reload animation
    this.generateAnimation();
  }


  sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
