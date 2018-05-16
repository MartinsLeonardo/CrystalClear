import { Component, OnInit } from '@angular/core';
import { Estrategia } from './estrategia.model';

@Component({
  selector: 'app-estrategias',
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.css']
})
export class EstrategiasComponent implements OnInit {

  estrategias = [
    new Estrategia('Estratégia 1','Desc'),
    new Estrategia('Estratégia 2','Desc')
  ]

  constructor() { }

  ngOnInit() {
  }

}
