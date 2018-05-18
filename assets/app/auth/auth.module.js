import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";
import { LogoutComponent } from "./logout/logout.component";
import { ReactiveFormsModule } from "@angular/forms";
import { authRouting } from "./auth.routing";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SigninComponent,
                        SingupComponent,
                        LogoutComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        authRouting
                    ]
                },] },
    ];
    return AuthModule;
}());
export { AuthModule };
