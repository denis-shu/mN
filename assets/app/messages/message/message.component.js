import { Component, Input } from "@angular/core";
import { Message } from "../messagemodel";
import { MessageService } from "../message.servoce";
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService) {
        this.messageService = messageService;
    }
    MessageComponent.prototype.onEdit = function () {
        this.messageService.EditMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this.messageService
            .deleteMEssage(this.message)
            .subscribe(function (res) { return console.log("1", res); });
    };
    MessageComponent.prototype.isUsers = function () {
        return localStorage.getItem("userId") == this.message.userId;
    };
    MessageComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-message",
                    templateUrl: "./message.component.html",
                    styleUrls: ["./message.component.css"]
                },] },
    ];
    /** @nocollapse */
    MessageComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    MessageComponent.propDecorators = {
        "message": [{ type: Input },],
    };
    return MessageComponent;
}());
export { MessageComponent };
