import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageComponent } from "./message/message.component";
import { MessagelistComponent } from "./messagelist/messagelist.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageinputComponent } from "./messageinput/messageinput.component";
import { FormsModule } from "@angular/forms";
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MessageComponent,
                        MessagelistComponent,
                        MessagesComponent,
                        MessageinputComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ]
                },] },
    ];
    return MessageModule;
}());
export { MessageModule };
