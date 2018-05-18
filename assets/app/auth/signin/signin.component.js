import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "../usermodel";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
var SigninComponent = /** @class */ (function () {
    function SigninComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.sform = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new User(this.sform.value.email, this.sform.value.password);
        this.auth.signIn(user).subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.router.navigateByUrl('/');
        });
        this.sform.reset();
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-signin",
                    templateUrl: "./signin.component.html",
                    styleUrls: ["./signin.component.css"]
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return [
        { type: AuthService, },
        { type: Router, },
    ]; };
    return SigninComponent;
}());
export { SigninComponent };
