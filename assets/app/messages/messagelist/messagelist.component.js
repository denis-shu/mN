import { Component } from "@angular/core";
import { MessageService } from "../message.servoce";
var MessagelistComponent = /** @class */ (function () {
    function MessagelistComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    MessagelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages().subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessagelistComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-messagelist",
                    templateUrl: "./messagelist.component.html",
                    styleUrls: ["./messagelist.component.css"]
                },] },
    ];
    /** @nocollapse */
    MessagelistComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessagelistComponent;
}());
export { MessagelistComponent };
