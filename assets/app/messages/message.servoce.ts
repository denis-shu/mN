import { Message } from "./messagemodel";

export class MessageService {
   private messages: Message[]=[];

    addMessage(message: Message){
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages(){
        return this.messages;
    }

    deleteMEssage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}