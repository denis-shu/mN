import { RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages/messages.component";
import { AuthComponent } from "./auth/auth/auth.component";
var APP_ROUTES = [
    { path: '', redirectTo: "/messages", pathMatch: "full" },
    { path: "messages", component: MessagesComponent },
    { path: "auth", component: AuthComponent, loadChildren: './auth/auth.module#AuthModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
