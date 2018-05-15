import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message/message.component';
import { MessageinputComponent } from './messages/messageinput/messageinput.component';
import { MessagelistComponent } from './messages/messagelist/messagelist.component';
import { MessageService } from './messages/message.servoce';
import { MessagesComponent } from './messages/messages/messages.component';
import { AuthComponent } from './auth/auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageinputComponent,
        MessagelistComponent,
        MessagesComponent,
        AuthComponent,
        HeaderComponent
],
    imports: [BrowserModule, FormsModule, routing],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}