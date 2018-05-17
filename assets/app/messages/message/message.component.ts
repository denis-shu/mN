import { Component, Input, Output } from "@angular/core";
import { Message } from "../messagemodel";
import { MessageService } from "../message.servoce";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  @Input() message: Message;

  constructor(private messageService: MessageService) {}

  onEdit() {
    this.messageService.EditMessage(this.message);
  }

  onDelete() {
    this.messageService
      .deleteMEssage(this.message)
      .subscribe(res => console.log("1", res));
  }

  isUsers() {
    return localStorage.getItem("userId") == this.message.userId;
  }
}
