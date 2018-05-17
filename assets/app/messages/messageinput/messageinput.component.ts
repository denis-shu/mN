import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.servoce";
import { Message } from "../messagemodel";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-messageinput",
  templateUrl: "./messageinput.component.html",
  styleUrls: ["./messageinput.component.css"]
})
export class MessageinputComponent implements OnInit {
  message: Message;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.mesageIsEdit.subscribe((msg: Message) => {
      this.message = msg;
      console.log(msg);
    });
  }

  onSubmit(f: NgForm) {
    if (this.message) {
      this.message.content = f.value.content;
      this.messageService
        .updateMessage(this.message)
        .subscribe(res => console.log(res));
      this.message = null;
    } else {
      const message = new Message(f.form.value.content, "DEN");
      this.messageService.addMessage(message).subscribe(
        data => {
          console.log("success");
        },
        err => {
          console.log(err);
        }
      );
    }
    f.resetForm();
  }

  onClear(form: NgForm) {
    this.message = null;
    form.resetForm();
  }
}
