import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";
import { Station } from "../Model/Station";
import { DetailService } from "../services/detail.service";
import { TransitService } from "../services/transit.service";

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
    private formBuilder: FormBuilder,
    private transitService: TransitService
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

  Onsubmit() {
    let result = [this.VoyageForm.value.depart];
    result = result.concat(
      this.transitService.getTransits(this.VoyageForm.value)
    );
    result.push(this.VoyageForm.value.arrive);
    this.transitService.storeResults(result);
    this.nav.navigateForward("/transit-resultat");
  }
}
