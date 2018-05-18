import { Message } from "./messagemodel";
import { Http, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { Injectable, EventEmitter } from "@angular/core";
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.messages = [];
        this.baseUrl = "https://devmen.herokuapp.com";
        this.mesageIsEdit = new EventEmitter();
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var hders = new Headers({ "Content-Type": "application/json" });
        var token = localStorage.getItem("token")
            ? "?token=" + localStorage.getItem("token")
            : "";
        return this.http
            .post(this.baseUrl + "/message" + token, body, { headers: hders })
            .map(function (res) {
            var result = res.json();
            console.log("res", res);
            console.log("resu", result);
            var messag = new Message(result.object.content, result.object.user.firstName, result.object._id, result.object.user._id);
            _this.messages.push(messag);
            return messag;
        })
            .catch(function (err) { return Observable.throw(err); });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        return this.http
            .get(this.baseUrl + "/message")
            .map(function (res) {
            var messages = res.json().obj;
            console.log(messages);
            var transformMsg = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var m = messages_1[_i];
                console.log(m);
                transformMsg.push(new Message(m.content, m.user.firstName, m._id, m.user._id));
            }
            _this.messages = transformMsg;
            return transformMsg;
        })
            .catch(function (err) { return Observable.throw(err.json()); });
    };
    MessageService.prototype.EditMessage = function (msg) {
        this.mesageIsEdit.emit(msg);
    };
    MessageService.prototype.updateMessage = function (msg) {
        var body = JSON.stringify(msg);
        var hders = new Headers({ "Content-Type": "application/json" });
        var token = localStorage.getItem("token")
            ? "?token=" + localStorage.getItem("token")
            : "";
        return this.http
            .patch(this.baseUrl + "/message/" + msg.messageId + token, body, {
            headers: hders
        })
            .map(function (res) {
            res.json();
            console.log("res", res);
        })
            .catch(function (err) { return Observable.throw(err.json()); });
    };
    MessageService.prototype.deleteMEssage = function (msg) {
        var token = localStorage.getItem("token")
            ? "?token=" + localStorage.getItem("token")
            : "";
        this.messages.splice(this.messages.indexOf(msg), 1);
        return this.http
            .delete(this.baseUrl + "/message/" + msg.messageId + token)
            .map(function (res) {
            console.log("res", res);
            return res.json();
        })
            .catch(function (err) { return Observable.throw(err.json()); });
    };
    MessageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return MessageService;
}());
export { MessageService };
