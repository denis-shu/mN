import { Component, OnInit } from "@angular/core";
import { Message } from "../messagemodel";
import { MessageService } from "../message.servoce";

@Component({
  selector: "app-messagelist",
  templateUrl: "./messagelist.component.html",
  styleUrls: ["./messagelist.component.css"]
})
export class MessagelistComponent implements OnInit {
  messages: Message[] = [
    // new Message("Some messs", "Dens"),
    // new Message("Some messs1", "Dens1"),
    // new Message("Some messs2", "Dens2")
  ];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.getMessages().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
