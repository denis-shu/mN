import { Component } from "@angular/core";
import { MessageService } from "../message.servoce";
import { Message } from "../messagemodel";
var MessageinputComponent = /** @class */ (function () {
    function MessageinputComponent(messageService) {
        this.messageService = messageService;
    }
    MessageinputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.mesageIsEdit.subscribe(function (msg) {
            _this.message = msg;
            console.log(msg);
        });
    };
    MessageinputComponent.prototype.onSubmit = function (f) {
        if (this.message) {
            this.message.content = f.value.content;
            this.messageService
                .updateMessage(this.message)
                .subscribe(function (res) { return console.log(res); });
            this.message = null;
        }
        else {
            var message = new Message(f.form.value.content, "DEN");
            this.messageService.addMessage(message).subscribe(function (data) {
                console.log("success");
            }, function (err) {
                console.log(err);
            });
        }
        f.resetForm();
    };
    MessageinputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    MessageinputComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-messageinput",
                    templateUrl: "./messageinput.component.html",
                    styleUrls: ["./messageinput.component.css"]
                },] },
    ];
    /** @nocollapse */
    MessageinputComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessageinputComponent;
}());
export { MessageinputComponent };
