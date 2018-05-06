import { Component, OnInit } from '@angular/core';
import { Documento } from './documento.model';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  documentos = [
    new Documento('Documento 1','Desc'),
    new Documento('Documento 2','Desc')
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
