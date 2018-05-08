import { Component, OnInit } from '@angular/core';
import { Processo } from './processo.model';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {
  selecionado = null;
  processos = [
    new Processo('Observações','Para que o projeto seja adequado a esta metodologia é necessário que haja uma ou mais entregas. Se for constatado que em apenas uma entrega é possível realizar o projeto, este projeto não é grande o suficiente para a aplicação dos conceitos do Crystal Clear.', 'red'),
    new Processo('Ciclo do Projeto','Se inicia na fase de Staging, passa pelas fases de contratação, ensino da metodologia, ciclo de entrega, finalizando em um workshop. Todo o ciclo do projeto deve ser monitorado para acompanhamento da sua evolução.','red'),
    new Processo('Staging','Na metodologia Clear da família cristal é adotada a técnica "Exploratório de 360 Graus" para a realização dessa fase','red'),
    new Processo('Contratação','Na fase de contratação é realizada a contratação da equipe, e o ensino da metodologia aos contratados. Os papéis adotados são: \n _Executive Sponsor (Obrigatório) \n _Lead Designer (Obrigatório) _Business Expert & Embassador User (Usuário Embaixador) _Expert Developer Coordinator (Cordenador) _Designer-Programmer _Tester _Writer _OBS: A quantidade de colaboradores de pouca ou sem experiência deve ser menor do que a de colaboradores experientes.', 'red'),
    new Processo('Ensino da metodologia','O Projeto pode sofrer acréscimo ou decréscimo de colaboradores ao longo do projeto. (Crystal pensa na parte financeira, mas deve ser planejado na fase exploratória de 360 graus) Deve ser revisado, ou ensinado a metodologia Crystal Clear para todos os colaboradores. (2 - 7 dias)', 'red'),

    new Processo('Ciclo de Entrega','Conta com as etapas de Calibração do Plano de Lançamento, Iterações, Entregas para Usuários Finais e uma conclusão contendo reflexão.','yellow'),
    new Processo('Calibração do Plano de Lançamento (Staging)','Reunião na qual o Patrocinador Executivo controlará as prioridades do projeto enquanto a equipe de desenvolvimento controlará a estimativa de quanto tempo cada tarefa levará.','yellow'),
    new Processo('Iterações (Integradas e Testadas)','Este itém é explicado em Ciclo de Iteração','yellow'),
    new Processo('Entregas Para usuários finais','A primeira entrega na metodologia Crystal Clear tem prazo máximo de 3 meses para realizar-se contando do início do projeto, mas o indicado é que sejam realizadas entregas finais mensalmente. Conta com duas fases: Implantação e Treinamento.','yellow'),
    new Processo('Conclusão e Reflexão','Inclua uma comemoração de entrega para aliviar a pressão dos envolvidos, fora do local de trabalho ou uma folga aos envolvidos, algo que limpe as suas tensões. Workshop: Realizar uma reflexão final do projeto, uma retrospectiva.','yellow'),

    new Processo('Ciclo de Iteração','Este ciclo conta com 4 processos, Planejamento, atividades diárias/semanais, ciclo de integração e workshop e celebração.','blue'),
    new Processo('Iteration Planning (Planejamento)','Reunião de prazo máximo de 1 hora para definir as seguintes situações: _Prioridades da iteração semanal. _Planejar como será o Desenvolver, Testar e Integrar.','blue'),
    new Processo('Atividades Diárias/Semanais','Check-in diário (10 min), FeedBacks ao sistema de monitoramento, Episódio de Desenvolvimento, Contar com o feedback do Embassador User por menos de 1 hora por semana coloca o projeto em zona de risco em relação à adequação dos requisitos.','blue'),
    new Processo('Ciclo de Integração','Composto pelos Testes de Integração, curtos períodos de integração e gerenciamento de configuração.','blue'),
    new Processo('Workshop e Celebração','Oficinas pós interação são para auxílio emocional dos colaboradores e para discussão da saúde do projeto. Verifica-se ferramenta de monitoramento e com feedbacks ao grupo sobre o andamento do projeto.','blue'),
    new Processo('Episódio de Desenvolvimento','Oficinas pós interação são para auxílio emocional dos colaboradores e para discussão da saúde do projeto. Verifica-se ferramenta de monitoramento e com feedbacks ao grupo sobre o andamento do projeto.','blue')
  ]

  selecionar(selecionado) {
    this.selecionado = selecionado;
  }
  
  constructor() { }

  ngOnInit() {
  }

}