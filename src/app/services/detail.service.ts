import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Station} from "../Model/Station";
import {Observable} from "rxjs";
import {Voyage} from "../Model/Voyage";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
   preference: string;
   resultats;

  constructor(private Http: HttpClient) { }
  storeData(prefer: string)
  {
    this.preference = prefer;
  }

  getData() {
    return this.preference;
  }

  storeResults(resultats: any)
  {
    this.resultats = resultats;
  }
  getResults() {
    return this.resultats;
  }

  getAllStations(): Observable<Station[]>
  {
    return this.Http.get<Station[]>(environment.url + '/v1/stations');
  }

  SearchVoyage(depart: string, arrive: string, transport: string, heureDepart: String, minP: Number, maxP: Number): Observable<Voyage[]>
  {
    return this.Http.get<Voyage[]>(environment.url + '/v1/voyages/search?depart=' + depart + '&arrive=' + arrive + "&time=" + heureDepart + '&minP=' + minP + '&maxP=' + maxP + '&transport=' + transport);
  }
}
