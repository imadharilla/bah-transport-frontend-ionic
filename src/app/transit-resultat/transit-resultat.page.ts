import { Component, OnInit } from "@angular/core";
import { TransitService } from "../services/transit.service";

@Component({
  selector: "app-transit-resultat",
  templateUrl: "./transit-resultat.page.html",
  styleUrls: ["./transit-resultat.page.scss"],
})
export class TransitResultatPage implements OnInit {
  resultats;

  constructor(private transitService: TransitService) {}

  ngOnInit() {
    this.resultats = this.transitService.getResults();
  }
}
