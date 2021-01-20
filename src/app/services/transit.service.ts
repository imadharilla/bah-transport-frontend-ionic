import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TransitService {
  private resultats;

  data = [
    {
      depart: "Rabat Agdal",
      arrive: "Rabat Ville",
      transit: {
        Tram: ["Al Irfane", "Bab Lhad", "Al Massira"],
        Taxi: [],
        Bus: ["Al Irfane", "Al Massira"],
      },
    },
    {
      depart: "Rabat Ville",
      arrive: "Rabat Agdal",
      transit: {
        Tram: ["Al Irfane", "Bab Lhad", "Al Massira"].reverse(),
        Taxi: [],
        Bus: ["Al Irfane", "Al Massira"].reverse(),
      },
    },
    {
      depart: "Al Irfane",
      arrive: "Al Massira",
      transit: {
        Tram: ["Bab Lhad"],
        Taxi: [],
        Bus: ["Rabat Agdal"],
      },
    },
    {
      depart: "Al Massira",
      arrive: "Al Irfane",
      transit: {
        Tram: ["Bab Lhad"],
        Taxi: [],
        Bus: ["Rabat Agdal"],
      },
    },
    {
      depart: "Rabat Agdal",
      arrive: "Al Massira",
      transit: {
        Tram: ["Al Irfane", "Bab Lhad"],
        Taxi: [],
        Bus: ["Al Irfane"],
      },
    },
    {
      depart: "Al Massira",
      arrive: "Rabat Agdal",
      transit: {
        Tram: ["Al Irfane", "Bab Lhad"].reverse(),
        Taxi: [],
        Bus: ["Al Irfane"],
      },
    },
  ];

  constructor() {}

  getTransits({ depart, arrive, transport }) {
    const transit = this.data.filter(
      (item) => item.depart === depart && item.arrive === arrive
    );
    if (transit.length > 0) return transit[0].transit[transport];

    return [];
  }

  storeResults(resultats: any) {
    this.resultats = resultats;
  }
  getResults() {
    return this.resultats;
  }
}
