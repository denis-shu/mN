import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message/message.component';
import { MessageinputComponent } from './messages/messageinput/messageinput.component';
import { MessagelistComponent } from './messages/messagelist/messagelist.component';
import { MessageService } from './messages/message.servoce';
import { MessagesComponent } from './messages/messages/messages.component';
import { AuthComponent } from './auth/auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { LogoutComponent } from './auth/logout/logout.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageinputComponent,
        MessagelistComponent,
        MessagesComponent,
        AuthComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SingupComponent
],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
    providers: [MessageService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}