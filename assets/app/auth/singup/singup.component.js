import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { User } from "../usermodel";
var SingupComponent = /** @class */ (function () {
    function SingupComponent(authService) {
        this.authService = authService;
    }
    SingupComponent.prototype.ngOnInit = function () {
        this.sform = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    };
    SingupComponent.prototype.onSubmit = function () {
        var user = new User(this.sform.value.email, this.sform.value.password, this.sform.value.firstName, this.sform.value.lastName);
        this.authService.signUp(user).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.sform.reset();
    };
    SingupComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-singup",
                    templateUrl: "./singup.component.html",
                    styleUrls: ["./singup.component.css"]
                },] },
    ];
    /** @nocollapse */
    SingupComponent.ctorParameters = function () { return [
        { type: AuthService, },
    ]; };
    return SingupComponent;
}());
export { SingupComponent };
