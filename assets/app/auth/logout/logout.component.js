import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auht, router) {
        this.auht = auht;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () { };
    LogoutComponent.prototype.onLogout = function () {
        this.auht.logout();
        this.router.navigate(['/auth/signin']);
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-logout",
                    templateUrl: "./logout.component.html",
                    styleUrls: ["./logout.component.css"]
                },] },
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = function () { return [
        { type: AuthService, },
        { type: Router, },
    ]; };
    return LogoutComponent;
}());
export { LogoutComponent };
