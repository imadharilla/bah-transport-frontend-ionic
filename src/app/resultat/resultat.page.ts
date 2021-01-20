import { Component, OnInit } from '@angular/core';
import {DetailService} from '../services/detail.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.page.html',
  styleUrls: ['./resultat.page.scss'],
})
export class ResultatPage implements OnInit {
  resultats;

  constructor(public DetServ: DetailService) { }

  ngOnInit() {
    this.resultats = this.DetServ.getResults();
  }

}
