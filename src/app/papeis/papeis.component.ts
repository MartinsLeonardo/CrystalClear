import { Component, OnInit } from '@angular/core';
import { Papel } from './papel.model';

@Component({
  selector: 'app-papeis',
  templateUrl: './papeis.component.html',
  styleUrls: ['./papeis.component.css']
})
export class PapeisComponent implements OnInit {
  papeis = [
    new Papel('Executive Sponsor (Patrocinador Executivo)','É o responsável pelos recursos financeiros do projeto, apoio logístico e emocional. Deve manter a equipe informada de seus feitos e receber feedback da equipe do andamento do projeto, normalmente por meio da ferramenta [burn chart]. Deve definir prioridades do projeto para a equipe.','../../assets/img/papeis/sponsor.png'),
    new Papel('Lead Designer (Designer Líder - Gerente de Projeto)','Responsável pela arquitetura do sistema, treinar membros mais jovens, manter contato com o Executive Sponsor e gerenciar desenvolvimento do projeto. É importante ressaltar que deve ser planejado um trabalho semanal de menor carga horária para este papel, evitando sobrecarga de trabalho em casos de emergência e horas extras por conta destas emergências.','../../assets/img/papeis/lead.png'),
    new Papel('Expert Developer (Desenvolvedor Especialista)','	Lida com tarefas complexas do projeto, auxilia ao Lead Design quando necessário.','../../assets/img/papeis/expert.png'),
    new Papel('Business Expert & Ambassador User (Usuário Embaixador)','O usuário embaixador é um usuário especialista, geralmente não faz parte da equipe, mas auxilia no andamento do projeto. Por não ser parte da equipe, raramente este usuário terá seu tempo 100% disponível para o andamento do projeto, entretanto se for possível colher feedbacks deste usuário, em torno de duas horas por semana (Não necessáriamente consecutivamente) será o suficiente. Deve colaborar na produção de documentações como Lista de Atores, Modelo de Função do Usuário, Lista de Requisitos, Casos de Uso', '../../assets/img/papeis/user.png'),
    new Papel('Coordinator (Coordenador)','Seu papel é o de cuidar de documentações como Mapa do Projeto, Plano de Liberação, Status do Projeto, Lista de Riscos, Plano de Iteração e Status, Cronograma de Visualização.','../../assets/img/papeis/coordinator.png'),
    new Papel('Designer-Programmer','Responsável pela realização de Rascunhos de tela, Modelo de Domínio Comum, Esboços e Notas de Design, Código Fonte, Código de Migração, Testes e Pacote de Sistema','../../assets/img/papeis/programmer.png'),
    new Papel('Tester (Papel Rotativo)','É responsável pela verificação das implementações, certificando a qualidade do sistema, deve reportar os erros encontrados ao desenvolvedor de origem e documentar este processo por meio da documentação Bug Reports.','../../assets/img/papeis/tester.png'),
    new Papel('Writer (Escritor - Papel Rotativo)','Confecciona textos como os textos de suporte ao usuário e realiza correções ortográficas do projeto','../../assets/img/papeis/writer.png')
  ]
  constructor() { }

  ngOnInit() {
  }

}
