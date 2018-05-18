import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
var AuthComponent = /** @class */ (function () {
    function AuthComponent(auth) {
        this.auth = auth;
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoogedIn();
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-auth",
                    templateUrl: "./auth.component.html",
                    styleUrls: ["./auth.component.css"]
                },] },
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = function () { return [
        { type: AuthService, },
    ]; };
    return AuthComponent;
}());
export { AuthComponent };
