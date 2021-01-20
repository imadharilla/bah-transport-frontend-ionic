import { Component, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public router: Router) {}
  mode = 0;

  start(): void {
    this.router.navigateByUrl("/accueil");
  }

  changeTheme(event) {
    if (event.detail.checked) {
      document.body.setAttribute("color-theme", "dark");
      this.mode = 1;
    } else {
      document.body.setAttribute("color-theme", "light");
      this.mode = 0;
    }
  }
}
