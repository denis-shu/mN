import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3000";
    }
    AuthService.prototype.signUp = function (user) {
        var body = JSON.stringify(user);
        var hders = new Headers({ "Content-Type": "application/json" });
        return this.http
            .post(this.baseUrl + "/user", body, { headers: hders })
            .map(function (response) { return response.json(); })
            .catch(function (err) { return Observable.throw(err); });
    };
    AuthService.prototype.signIn = function (user) {
        var body = JSON.stringify(user);
        var hders = new Headers({ "Content-Type": "application/json" });
        return this.http
            .post(this.baseUrl + "/user/signin", body, { headers: hders })
            .map(function (response) { return response.json(); })
            .catch(function (err) { return Observable.throw(err); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoogedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return AuthService;
}());
export { AuthService };
