import { Component, OnInit } from '@angular/core';
import { Ferramenta } from './ferramenta.model';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {
  
  ferramentas = [
    new Ferramenta('Ferramenta 1','Desc','color'),
    new Ferramenta('Ferramenta 2','Desc', 'color')
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
