import { Component, OnInit } from '@angular/core';
import { Papel } from './papel.model';

@Component({
  selector: 'app-papeis',
  templateUrl: './papeis.component.html',
  styleUrls: ['./papeis.component.css']
})
export class PapeisComponent implements OnInit {
  papeis = [
    new Papel('Papel 1','Desc'),
    new Papel('Papel 2','Desc')
  ]
  constructor() { }

  ngOnInit() {
  }

}
