import { Component, OnInit } from '@angular/core';
import { Crystal } from './crystal.model';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  crystals = [
    new Crystal('Clear','L6','Life (L)','descrição','../../assets/img/familia/clear.png'),
    new Crystal('Clear','E6','Essential Money (E)','descrição','../../assets/img/familia/clear.png'),
    new Crystal('Clear','D6','Discretionary Money (D)','','../../assets/img/familia/clear.png'),
    new Crystal('Clear','C6','Comfort (C)','','../../assets/img/familia/clear.png'),

    new Crystal('Yellow','L20','Life (L)','','../../assets/img/familia/yellow.png'),
    new Crystal('Yellow','E20','Essential Money (E)','','../../assets/img/familia/yellow.png'),
    new Crystal('Yellow','D20','Discretionary Money (D)','','../../assets/img/familia/yellow.png'),
    new Crystal('Yellow','C20','Comfort (C)','','../../assets/img/familia/yellow.png'),

    new Crystal('Orange','L40','Life (L)','','../../assets/img/familia/orange.png'),
    new Crystal('Orange','E40','Essential Money (E)','','../../assets/img/familia/orange.png'),
    new Crystal('Orange','D40','Discretionary Money (D)','','../../assets/img/familia/orange.png'),
    new Crystal('Orange','C40','Comfort (C)','','../../assets/img/familia/orange.png'),

    new Crystal('Red','L80','Life (L)','','../../assets/img/familia/red.png'),
    new Crystal('Red','E80','Essential Money (E)','','../../assets/img/familia/red.png'),
    new Crystal('Red','D80','Discretionary Money (D)','','../../assets/img/familia/red.png'),
    new Crystal('Red','C80','Comfort (C)','','../../assets/img/familia/red.png'),

    new Crystal('Maroon','L200','Life (L)','','../../assets/img/familia/maroon.png'),
    new Crystal('Maroon','E200','Essential Money (E)','','../../assets/img/familia/maroon.png'),
    new Crystal('Maroon','D200','Discretionary Money (D)','','../../assets/img/familia/maroon.png'),
    new Crystal('Maroon','C200','Comfort (C)','','../../assets/img/familia/maroon.png')
  ]

  constructor() { }

  ngOnInit() {
  }

}
