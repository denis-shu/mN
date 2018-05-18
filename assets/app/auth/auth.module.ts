import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";
import { LogoutComponent } from "./logout/logout.component";
import { ReactiveFormsModule } from "@angular/forms";
import { authRouting } from "./auth.routing";

@NgModule({
    declarations:[
        SigninComponent,
        SingupComponent,
        LogoutComponent
    ],
    imports: [
         CommonModule,
         ReactiveFormsModule,
         authRouting
    ]
})

export class AuthModule {

}