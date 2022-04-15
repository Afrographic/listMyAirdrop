import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Input() prop:string[] = [];
  @Input() choice: any = null;
  constructor() { }

  ngOnInit(): void {
  }
  choose(choice: boolean) {
    this.choice = choice;
    this.change.emit(choice);
  }
}
