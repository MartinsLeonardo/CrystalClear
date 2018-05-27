import { Component, OnInit } from '@angular/core';
import { Ferramenta } from './ferramenta.model';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {
  
  ferramentas = [
    new Ferramenta('Burn Chart','Gráfico de linhas em duas dimensões que aponta a evolução do projeto','../../assets/img/ferramentas/burn.png'),
    new Ferramenta('Time Boxing','Uma data estipulada para o final de cada iteração', '../../assets/img/ferramentas/time.png'),
    new Ferramenta('Daily Standup/Check-in','Comunicação baseada em três questionamentos: _ Em que eu trabalhei ontem? _ O que eu planejo trabalhar hoje? _ O que está ficando no meu caminho?', '../../assets/img/ferramentas/checkin.png'),
    new Ferramenta('Delphi Estimation','Estimativa inicial do projeto: _ Estimar tamanho do sistema a ser construído; _ Estimar o tempo de trabalho de acordo com o tipo de colaborador; _ Equilibrar os lançamentos em tamanhos aproximadamente semelhantes; Importante considerar: _ Classes de negócios - telas - frameworks - aulas técnicas; _ Infraestrutura; _ Nível de experiência dos envolvidos;', '../../assets/img/ferramentas/budget.png'),
    new Ferramenta('Blitz Planning','Trata-se de uma maneira lúdica de determinar qual será o Walking Skeleton do projeto; Determinar prazos em dias ou semanas; Consiste nos seguintes passos: 1 Reunir a equipe; 2 Brainstorm rápido das tarefas (15 minutos); 3 Definição das tarefas; 4 Revisão das Tarefas; 5 Estimar prazo de cada tarefa; 6 Ordenar tarefas; 7 Marcar Walking Skeleton; 8 Identificar Releases; 9 Ajustar de acordo com as prioridades apontadas pelo Sponsor; 10 Gravar a saída (Foto ou Arquivar como Documento);', '../../assets/img/ferramentas/puzzle.png'),
    new Ferramenta('Workshop','Perguntas esperadas em um workshop: O que manter? Problemas? O que mudar?', '../../assets/img/ferramentas/workshop.png'),
    new Ferramenta('Information Radiators e Kanban','São utilizados para monitoramento do projeto e visam a identificação visual do status atual do projeto. É possível verificar a evolução do momento do Caso de Uso ou das Stories, realizar a atribuição dos trabalhos aos colaboradores e ainda realizar anotações sobre os resultados de Workshops.', '../../assets/img/ferramentas/post-it.png')
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
