import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ListComponent } from "./pages/list/list.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }