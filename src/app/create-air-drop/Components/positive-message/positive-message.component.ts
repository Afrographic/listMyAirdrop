import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-positive-message',
  templateUrl: './positive-message.component.html',
  styleUrls: ['./positive-message.component.scss']
})
export class PositiveMessageComponent implements OnInit {
  @Input() message: string="";
  @Input() positiveMessage_active: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}
