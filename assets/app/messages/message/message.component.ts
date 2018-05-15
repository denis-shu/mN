import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../messagemodel';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() edit =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onEdit(){
    this.edit.emit('A new Val');
  }

}
