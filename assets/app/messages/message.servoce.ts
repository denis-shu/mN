import { Message } from "./messagemodel";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  private baseUrl = "http://localhost:3000";
  mesageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http) {}

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const hders = new Headers({ "Content-Type": "application/json" });
    const token = localStorage.getItem("token")
      ? "?token=" + localStorage.getItem("token")
      : "";

    return this.http
      .post(this.baseUrl + "/message" + token, body, { headers: hders })
      .map((res: Response) => {
        const result = res.json();
        console.log("res", res);
        console.log("resu", result);
        const messag = new Message(
          result.object.content,
          result.object.user.firstName,
          result.object._id,
          result.object.user._id
        );
        this.messages.push(messag);
        return messag;
      })
      .catch((err: Response) => Observable.throw(err));
  }

  getMessages() {
    return this.http
      .get(this.baseUrl + "/message")
      .map((res: Response) => {
        const messages = res.json().obj;
        console.log(messages)
        const transformMsg: Message[] = [];
        for (let m of messages) {
          console.log(m);
          transformMsg.push(new Message(m.content, 
            m.user.firstName, m._id, m.user._id));
        }
        this.messages = transformMsg;
        return transformMsg;
      })
      .catch((err: Response) => Observable.throw(err.json()));
  }

  EditMessage(msg: Message) {
    this.mesageIsEdit.emit(msg);
  }

  updateMessage(msg: Message) {
    const body = JSON.stringify(msg);
    const hders = new Headers({ "Content-Type": "application/json" });
    const token = localStorage.getItem("token")
      ? "?token=" + localStorage.getItem("token")
      : "";

    return this.http
      .patch(this.baseUrl + "/message/" + msg.messageId + token, body, {
        headers: hders
      })
      .map((res: Response) => {
        res.json();
        console.log("res", res);
      })
      .catch((err: Response) => Observable.throw(err.json()));
  }

  deleteMEssage(msg: Message) {
    const token = localStorage.getItem("token")
      ? "?token=" + localStorage.getItem("token")
      : "";

    this.messages.splice(this.messages.indexOf(msg), 1);
    return this.http
      .delete(this.baseUrl + "/message/" + msg.messageId + token)
      .map((res: Response) => {
        console.log("res", res);

        return res.json();
      })
      .catch((err: Response) => Observable.throw(err.json()));
  }
}
