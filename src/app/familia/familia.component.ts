import { Component, OnInit } from '@angular/core';
import { Crystal } from './crystal.model';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  crystals = [
    new Crystal('Clear','L6','Life (L)','Projetos de alto risco, principalmente riscos ligados à saúde ou vida de terceiros envolvida. Para equipes de até 6 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Clear, mantendo o nível de segurança elevado.','../../assets/img/familia/clear.png'),
    new Crystal('Clear','E6','Essential Money (E)','Projetos de alto risco, principalmente altos riscos financeiros. Para equipes de até 6 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Clear, mantendo o nível de segurança elevado.','../../assets/img/familia/clear.png'),
    new Crystal('Clear','D6','Discretionary Money (D)','Projetos de riscos moderados. Para equipes de até 6 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Clear, mantendo o nível de segurança alto, dentro do cenário proposto.','../../assets/img/familia/clear.png'),
    new Crystal('Clear','C6','Comfort (C)','Projetos opcionais e sem riscos. Para equipes de até 6 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Clear, sendo que o nível de segurança é adaptável.','../../assets/img/familia/clear.png'),

    new Crystal('Yellow','L20','Life (L)','Projetos de alto risco, principalmente riscos ligados à saúde ou vida de terceiros envolvida. Para equipes de 7 a 20 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Yellow, mantendo o nível de segurança elevado.','../../assets/img/familia/yellow.png'),
    new Crystal('Yellow','E20','Essential Money (E)','Projetos de alto risco, principalmente altos riscos financeiros. Para equipes de 7 a 20 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Yellow, mantendo o nível de segurança elevado.','../../assets/img/familia/yellow.png'),
    new Crystal('Yellow','D20','Discretionary Money (D)','Projetos de riscos moderados. Para equipes de 7 a 20 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Yellow, mantendo o nível de segurança alto, dentro do cenário proposto.','../../assets/img/familia/yellow.png'),
    new Crystal('Yellow','C20','Comfort (C)','Projetos opcionais e sem riscos. Para equipes de 7 a 20 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Orange, sendo que o nível de segurança é adaptável.','../../assets/img/familia/yellow.png'),

    new Crystal('Orange','L40','Life (L)','Projetos de alto risco, principalmente riscos ligados à saúde ou vida de terceiros envolvida. Para equipes de 21 a 40 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Orange, mantendo o nível de segurança elevado.','../../assets/img/familia/orange.png'),
    new Crystal('Orange','E40','Essential Money (E)','Projetos de alto risco, principalmente altos riscos financeiros. Para equipes de 21 a 40 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Orange, mantendo o nível de segurança elevado.','../../assets/img/familia/orange.png'),
    new Crystal('Orange','D40','Discretionary Money (D)','Projetos de riscos moderados. Para equipes de 21 a 40 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Orange, mantendo o nível de segurança alto, dentro do cenário proposto.','../../assets/img/familia/orange.png'),
    new Crystal('Orange','C40','Comfort (C)','Projetos opcionais e sem riscos. Para equipes de 21 a 40 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Orange, sendo que o nível de segurança é adaptável.','../../assets/img/familia/orange.png'),

    new Crystal('Red','L80','Life (L)','Projetos de alto risco, principalmente riscos ligados à saúde ou vida de terceiros envolvida. Para equipes de 41 a 80 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Red, mantendo o nível de segurança elevado.','../../assets/img/familia/red.png'),
    new Crystal('Red','E80','Essential Money (E)','Projetos de alto risco, principalmente altos riscos financeiros. Para equipes de 41 a 80 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Red, mantendo o nível de segurança elevado.','../../assets/img/familia/red.png'),
    new Crystal('Red','D80','Discretionary Money (D)','Projetos de riscos moderados. Para equipes de até 41 a 80 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Red, mantendo o nível de segurança alto, dentro do cenário proposto.','../../assets/img/familia/red.png'),
    new Crystal('Red','C80','Comfort (C)','Projetos opcionais e sem riscos. Para equipes de 41 a 80 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Red, sendo que o nível de segurança é adaptável.','../../assets/img/familia/red.png'),

    new Crystal('Maroon','L200','Life (L)','Projetos de alto risco, principalmente riscos ligados à saúde ou vida de terceiros envolvida. Para equipes de 81 a 200 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Maroon, mantendo o nível de segurança elevado.','../../assets/img/familia/maroon.png'),
    new Crystal('Maroon','E200','Essential Money (E)','Projetos de alto risco, principalmente altos riscos financeiros. Para equipes de 81 a 200 pessoas. Este tipo de projeto deve seguir à risca todas as etapas propostas da metodologia Crystal Maroon, mantendo o nível de segurança elevado.','../../assets/img/familia/maroon.png'),
    new Crystal('Maroon','D200','Discretionary Money (D)','Projetos de riscos moderados. Para equipes de 81 a 200 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Maroon, mantendo o nível de segurança alto, dentro do cenário proposto.','../../assets/img/familia/maroon.png'),
    new Crystal('Maroon','C200','Comfort (C)','Projetos opcionais e sem riscos. Para equipes de 81 a 200 pessoas. Este tipo de projeto pode seguir parcialmente as etapas propostas da metodologia Crystal Maroon, sendo que o nível de segurança é adaptável.','../../assets/img/familia/maroon.png')
  ]

  constructor() { }

  ngOnInit() {
  }

}
