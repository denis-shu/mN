import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages/messages.component";
import { AuthComponent } from "./auth/auth/auth.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: "/messages", pathMatch: "full" },
  { path: "messages", component: MessagesComponent },
  { path: "auth", component: AuthComponent, loadChildren: './auth/auth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
