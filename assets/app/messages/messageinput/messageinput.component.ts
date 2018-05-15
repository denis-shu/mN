import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.servoce';
import { Message } from '../messagemodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messageinput',
  templateUrl: './messageinput.component.html',
  styleUrls: ['./messageinput.component.css']
})
export class MessageinputComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
   const message = new Message(f.form.value.content, 'DEN');

   this.messageService.addMessage(message);

   f.resetForm();
  }
}
