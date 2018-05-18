import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.servoce";
import { AuthComponent } from "./auth/auth/auth.component";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service";
import { MessageModule } from "./messages/message.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AuthComponent,
                        HeaderComponent,
                    ],
                    // imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
                    imports: [BrowserModule, routing, HttpModule, MessageModule],
                    providers: [MessageService, AuthService],
                    bootstrap: [AppComponent]
                },] },
    ];
    return AppModule;
}());
export { AppModule };
