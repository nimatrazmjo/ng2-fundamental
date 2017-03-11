"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EventsComponent = (function () {
    function EventsComponent(_eventsService, toastr) {
        this._eventsService = _eventsService;
        this.toastr = toastr;
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.event_parent = this._eventsService.getEvents();
    };
    EventsComponent.prototype.RecieveData = function (data) {
        console.log('Recieved :', data);
    };
    EventsComponent.prototype.checkToastrAction = function (eventName) {
        this.toastr.success(eventName);
    };
    EventsComponent = __decorate([
        core_1.Component({
            templateUrl: './events.component.html',
            styleUrls: ['./events.component.css']
        })
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
