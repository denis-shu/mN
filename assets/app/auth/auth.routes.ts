import { Routes } from "@angular/router";
import { SingupComponent } from "./singup/singup.component";
import { LogoutComponent } from "./logout/logout.component";
import { SigninComponent } from "./signin/signin.component";

export const AUTH_ROUTES: Routes = [

    {path:'', redirectTo: 'signup', pathMatch: 'full'},
    {path:'signup', component: SingupComponent},
    {path:'signin', component: SigninComponent},
    {path:'logout', component: LogoutComponent}
];



