import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { DetailService } from "../services/detail.service";
import { Station } from "../Model/Station";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  stations: Station[];
  /*heureDep: string[] = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00',
    '11:00', '',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'

  ];*/
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
      heureDepart: ["", Validators.pattern],
      transport: [""],
      prixMin: ["", Validators.required],
      prixMax: ["", Validators.required],
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
    if (this.VoyageForm.value.transport == "")
      this.VoyageForm.value.transport = this.DetServ.getData();
    this.DetServ.SearchVoyage(
      this.VoyageForm.value.depart,
      this.VoyageForm.value.arrive,
      this.VoyageForm.value.transport,
      this.VoyageForm.value.heureDepart,
      this.VoyageForm.value.prixMin,
      this.VoyageForm.value.prixMax
    ).subscribe(
      (data) => {
        this.DetServ.storeResults(data);
        this.nav.navigateForward("resultat");
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
