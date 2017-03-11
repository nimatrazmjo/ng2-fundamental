"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var events_component_1 = require('./events/events.component');
var event_thumbnail_component_1 = require('./events/event-thumbnail/event-thumbnail.component');
var nav_component_1 = require('./nav/nav.component');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var events_service_1 = require('./events/events.service');
var toastr_service_1 = require("./common/toastr.service");
var event_details_component_1 = require('./events/event-details/event-details.component');
var routes_1 = require("./routes");
var create_event_component_1 = require('./events/create-event/create-event.component');
var _404_component_1 = require("./errors/404.component");
var event_route_activator_service_1 = require("./events/event-details/event-route-activator.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                events_component_1.EventsComponent,
                event_thumbnail_component_1.EventThumbnailComponent,
                nav_component_1.NavComponent,
                event_details_component_1.EventDetailsComponent,
                create_event_component_1.CreateEventComponent,
                _404_component_1.Error404Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            providers: [events_service_1.EventsService, toastr_service_1.ToastrService, event_route_activator_service_1.EventRouteActivatorService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
