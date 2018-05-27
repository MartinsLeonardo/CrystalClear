import { Component, OnInit } from '@angular/core';
import { Processo } from './processo.model';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {
  selecionado = null;
  
  ciclos = [
    new Processo('Ciclo do Projeto','Se inicia na fase de Staging, passa pelas fases de contratação, ensino da metodologia, ciclo de entrega, finalizando em um workshop. Todo o ciclo do projeto deve ser monitorado para acompanhamento da sua evolução.','red','../../assets/img/processos/ciclo-projeto.png'),
    new Processo('Ciclo de Entrega','Conta com as etapas de Calibração do Plano de Lançamento, Iterações, Entregas para Usuários Finais e uma conclusão contendo reflexão.','yellow','../../assets/img/processos/ciclo-projeto.png'),
    new Processo('Ciclo de Iteração','Este ciclo conta com 4 processos, Planejamento, atividades diárias/semanais, ciclo de integração e workshop e celebração.','blue','../../assets/img/processos/ciclo-projeto.png'),
    new Processo('Ciclo de Integração','Composto pelos Testes de Integração, curtos períodos de integração e gerenciamento de configuração.','blue','../../assets/img/processos/ciclo-projeto.png')
  ]
  
  processos = [
    new Processo('1. Staging','Na metodologia Clear da família cristal é adotada a técnica "Exploratório de 360 Graus" para a realização dessa fase','red','../../assets/img/processos/staging.png'),
    new Processo('2. Contratação','Na fase de contratação é realizada a contratação da equipe, e o ensino da metodologia aos contratados. Os papéis adotados são: \n _Executive Sponsor (Obrigatório) \n _Lead Designer (Obrigatório) _Business Expert & Embassador User (Usuário Embaixador) _Expert Developer Coordinator (Cordenador) _Designer-Programmer _Tester _Writer _OBS: A quantidade de colaboradores de pouca ou sem experiência deve ser menor do que a de colaboradores experientes.', 'red','../../assets/img/processos/hiring.png'),
    new Processo('3. Ensino da metodologia','O Projeto pode sofrer acréscimo ou decréscimo de colaboradores ao longo do projeto. (Crystal pensa na parte financeira, mas deve ser planejado na fase exploratória de 360 graus) Deve ser revisado, ou ensinado a metodologia Crystal Clear para todos os colaboradores. (2 - 7 dias)', 'red', '../../assets/img/processos/presentation.png'),
    new Processo('4. Edição e Revisão','Reunião na qual o Patrocinador Executivo controlará as prioridades do projeto enquanto a equipe de desenvolvimento controlará a estimativa de quanto tempo cada tarefa levará.','yellow','../../assets/img/processos/edit.png'),
    new Processo('5. Monitoramento','Realização de monitoria do progresso do projeto','yellow','../../assets/img/processos/growth.png'),  
    new Processo('6. Iteration Planning (Planejamento)','Reunião de prazo máximo de 1 hora para definir as seguintes situações: _Prioridades da iteração semanal. _Planejar como será o Desenvolver, Testar e Integrar.','blue','../../assets/img/processos/planning.png'),
    new Processo('6. Atividades Diárias/Semanais','Check-in diário (10 min), FeedBacks ao sistema de monitoramento, Episódio de Desenvolvimento, Contar com o feedback do Embassador User por menos de 1 hora por semana coloca o projeto em zona de risco em relação à adequação dos requisitos.','blue','../../assets/img/processos/daily.png'),
    new Processo('7. Episódio de Desenvolvimento','Consiste na atividade de desenvolvimento do projeto, indica-se o uso de versionamento de códigos e estratégia de programação lado-a-lado.','blue','../../assets/img/processos/dev.png'),
    new Processo('8. Inspeção','Testes referentes ao sistema desenvolvido, contando ainda com a revisão realizada pelo usuário, pode ser entendida como uma análise crítica ao projeto.','blue','../../assets/img/processos/test.png'),
    new Processo('9. Workshop e Celebração','Oficinas pós interação são para auxílio emocional dos colaboradores e para discussão da saúde do projeto. Verifica-se ferramenta de monitoramento e com feedbacks ao grupo sobre o andamento do projeto.','blue','../../assets/img/processos/workshop.png'),
    new Processo('10. Entregas Para usuários finais','A primeira entrega na metodologia Crystal Clear tem prazo máximo de 3 meses para realizar-se contando do início do projeto, mas o indicado é que sejam realizadas entregas finais mensalmente. Conta com duas fases: Implantação e Treinamento.','yellow','../../assets/img/processos/diamond.png'),
    new Processo('Conclusão e Reflexão','Inclua uma comemoração de entrega para aliviar a pressão dos envolvidos, fora do local de trabalho ou uma folga aos envolvidos, algo que limpe as suas tensões. Workshop: Realizar uma reflexão final do projeto, uma retrospectiva.','yellow','../../assets/img/processos/finish.png'),
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
