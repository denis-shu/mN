import { RouterModule } from "@angular/router";
import { SingupComponent } from "./singup/singup.component";
import { LogoutComponent } from "./logout/logout.component";
import { SigninComponent } from "./signin/signin.component";
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SingupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
