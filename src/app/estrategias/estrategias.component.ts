import { Component, OnInit } from '@angular/core';
import { Estrategia } from './estrategia.model';

@Component({
  selector: 'app-estrategias',
  templateUrl: './estrategias.component.html',
  styleUrls: ['./estrategias.component.css']
})
export class EstrategiasComponent implements OnInit {

  estrategias = [
    new Estrategia('Exploratory 360°','Esta técnica é usada para explorar pontos chave de um projeto antes de seu início: _Valor do negócio (Estimativa Monetária) _Levantamento de Requisitos Principais _Modelo de domínio _Tecnologia envolvida _Plano do projeto _Montagem da equipe _Processo ou metodologia','../../assets/img/estrategias/360.png'),
    new Estrategia('Interação com o Usuário','Técnica que consiste na inspeção de usabilidade e dessa forma impor a garantia de qualidade. O usuário envolvido neste contexto é o Usuário Embaixador, papel apresentado anteriormente.','../../assets/img/estrategias/interaction.png'),
    new Estrategia('Early Victory','Nome dado à primeira integração e entrega realizada, tem papel emocional para o time, é a partir dele que o cliente verifica o valor do time e o time vê sua primeira vitória. Uma equipe nova precisa de novos bons resultados, bom começo.','../../assets/img/estrategias/trophy.png'),
    new Estrategia('Walking Skeleton','É a base para o crescimento incremental do projeto, trata-se da menor parte completa de uma função de ponta a ponta, ou um requisito base implementado','../../assets/img/estrategias/structure.png'),
    new Estrategia('Incremental Rearchitecture','A equipe desenvolve a arquitetura em partes, de acordo com a maturação do projeto. Toda a base incremental se inicia do Walking Skeleton','../../assets/img/estrategias/update.png'),
    new Estrategia('Programação lado-a-lado','A programação lado a lado permite maior proximidade entre programadores. É uma estratégia física que consiste em colocar estações de trabalho próximas; Ganho: Ajuda, integração e comunicação osmótica.','../../assets/img/estrategias/side-by-side.png'),
    new Estrategia('Entrevistas do Projeto','Tem o objetivo de traçar pontos técnicos fortes e pontos fracos dos colaboradores','../../assets/img/estrategias/reunion.png')
  ]

  constructor() { }

  ngOnInit() {
  }

}
