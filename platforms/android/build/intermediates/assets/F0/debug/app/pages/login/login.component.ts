import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls:["./login-common.css","./login.css"]
})
export class LoginComponent implements OnInit {
    email = "abdallahahmed2025@gmail.com";
    isLoggingIn = true;
    user: User;
    @ViewChild("container") container: ElementRef;

    constructor(private page: Page,
                private userService: UserService,
                private router: Router) { 
        this.user = new User();
    }
    ngOnInit(){
        this.page.backgroundImage = "res://bg_login";
    }
    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }
    submit() {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
         this.userService.login(this.user)
        .subscribe(
            () => this.router.navigate(["/list"]),
            (error) => alert("Unfortunately we could not find your account.")
        );
    }
    signUp() {
          this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }
}
