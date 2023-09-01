import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { getAccs,WriteAcc } from "./my_scripts.js";
import * as fs from 'file-system';

@Component({
  selector: "hello",
  templateUrl: "first_page.html",
  styleUrls: ["firts_page.css"],
})
export class AppComponent {
  UserName = "";
  UserLogin = "";
  UserPassword = "";
  constructor(private router: Router) {}
  LoginChoice: boolean = false;
  RegistryChoice: boolean = false;

  ShowLogin() {
    this.LoginChoice = true;
    this.RegistryChoice = false;
  }

  ShowRegistry() {
    this.LoginChoice = false;
    this.RegistryChoice = true;
  }

  CheckAcc() {
    var Verify = 0;
    var accs = getAccs();
    for (var val of accs.users) {
      if (val.login == this.UserLogin) {
        Verify = 1;
        if (val.password == this.UserPassword) {
          Verify = 2;
        }
      }
    }
    return Verify;
  }

  LoginAcc() {
    var Verify = this.CheckAcc();
    if (Verify == 2) {
      alert ("Hello, " + this.UserLogin);
    } else {
      if (Verify == 1) {
        alert ("Wrong password! >:(");
      } else {
        alert ("I dunno u =-=");
      }
    }
  }
  AddAcc() {
    WriteAcc(this.UserName, this.UserLogin, this.UserPassword)
  }
}
