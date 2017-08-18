import { Component, OnInit } from "@angular/core";

import LoginHistoryService from "./login-history.service";
import { LoginHistoryRoute } from "./routes";

@Component({
	templateUrl: "login-history.component.html",
	styleUrls: []
})
export default class LoginHistoryComponent implements OnInit {
	pageTitle: string = LoginHistoryRoute.title;
  loginHistory: Array<Date>;
	errorMessage: string;

	ngOnInit() : void {
		console.log('retrieving product data');
    this.loginHistory = this.loginHistoryService.getLogins();
	}

    constructor(private loginHistoryService : LoginHistoryService) { }
}
