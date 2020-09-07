import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "@nativescript/angular";
import {CustomRouteReuseStrategy} from "./custom-route-reuse";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ItemsComponent} from "./item/items.component";
import {ItemDetailComponent} from "./item/item-detail.component";
import {RouteReuseStrategy} from "@angular/router";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        CustomRouteReuseStrategy
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}
