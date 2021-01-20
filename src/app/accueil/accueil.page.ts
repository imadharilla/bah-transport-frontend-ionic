import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { User } from "../Model/User";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { NavigationExtras, Router, UrlTree } from "@angular/router";
import { NavigationOptions } from "@ionic/angular/providers/nav-controller";
import { DetailService } from "../services/detail.service";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.page.html",
  styleUrls: ["./accueil.page.scss"],
})
export class AccueilPage implements OnInit {
  slideOpt = {
    initialSlide: 0,
    speed: 400,
  };
  user: User;
  UserForm: FormGroup;
  constructor(
    public detServ: DetailService,
    public router: Router,
    public nav: NavController,
    private formBuilder: FormBuilder,
    public userServ: UserService
  ) {}

  ngOnInit() {
    this.initform();
  }
  next() {}
  initform() {
    this.UserForm = this.formBuilder.group({
      age: ["", Validators.required],
      handicap: ["", Validators.required],
      transport: ["", Validators.required],
      genre: ["", Validators.required],
    });
  }

  Onsubmit() {
    this.user = this.UserForm.value;
    this.userServ.addInformation(this.user).subscribe(
      (data) => {},
      (error) => console.log(error)
    );
    this.UserForm.reset({
      age: "",
      handicap: "",
      transport: "",
      genre: "",
    });
    this.detServ.storeData(this.user.transport);
    this.nav.navigateForward("consultation");
  }
}
