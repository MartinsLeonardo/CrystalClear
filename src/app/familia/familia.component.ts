import { Component, OnInit } from '@angular/core';
import { Crystal } from './crystal.model';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  crystals = [
    new Crystal('Clear','L6','Life (L)'),
    new Crystal('Clear','E6','Essential Money (E)'),
    new Crystal('Clear','D6','Discretionary Money (D)'),
    new Crystal('Clear','C6','Comfort (C)'),
    new Crystal('Yellow','L20','Life (L)'),
    new Crystal('Yellow','E20','Essential Money (E)'),
    new Crystal('Yellow','D20','Discretionary Money (D)'),
    new Crystal('Yellow','C20','Comfort (C)'),
    new Crystal('Orange','L40','Life (L)'),
    new Crystal('Orange','E40','Essential Money (E)'),
    new Crystal('Orange','D40','Discretionary Money (D)'),
    new Crystal('Orange','C40','Comfort (C)'),
    new Crystal('Red','L80','Life (L)'),
    new Crystal('Red','E80','Essential Money (E)'),
    new Crystal('Red','D80','Discretionary Money (D)'),
    new Crystal('Red','C80','Comfort (C)'),
    new Crystal('Maroon','L200','Life (L)'),
    new Crystal('Maroon','E200','Essential Money (E)'),
    new Crystal('Maroon','D200','Discretionary Money (D)'),
    new Crystal('Maroon','C200','Comfort (C)')
  ]

  constructor() { }

  ngOnInit() {
  }

}
