"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.ngOnInit = function () {
    };
    EventThumbnailComponent.prototype.LateStart = function () {
        var colorStatus = this.event && this.event.time === '8:00 am';
        return { green: colorStatus, bold: colorStatus };
    };
    EventThumbnailComponent.prototype.getCardStyle = function () {
        return { height: '200px', 'margin-bottom': '10px' };
    };
    EventThumbnailComponent.prototype.EarlyStart = function () {
        if (this.event && this.event.time === '8:00 am')
            return 'green bold';
        return '';
    };
    __decorate([
        core_1.Input()
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'app-event-thumbnail',
            templateUrl: './event-thumbnail.component.html',
            styleUrls: ['./event-thumbnail.component.css']
        })
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
