import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransitService {
  private resultats;

  constructor() {}

  storeResults(resultats: any) {
    this.resultats = resultats;
  }
  getResults() {
    return this.resultats;
  }
}
