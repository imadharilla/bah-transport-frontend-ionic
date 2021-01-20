import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { Station } from "../Model/Station";
import { DetailService } from "../services/detail.service";

@Component({
  selector: "app-transit",
  templateUrl: "./transit.page.html",
  styleUrls: ["./transit.page.scss"],
})
export class TransitPage implements OnInit {
  stations: Station[];
  VoyageForm: FormGroup;

  constructor(
    public nav: NavController,
    public DetServ: DetailService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initform();
    this.getAllStations();
  }

  initform() {
    this.VoyageForm = this.formBuilder.group({
      depart: ["", Validators.required],
      arrive: ["", Validators.required],
      transport: [""],
    });
  }
  getAllStations() {
    this.DetServ.getAllStations().subscribe(
      (data) => {
        this.stations = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Onsubmit() {}
}
