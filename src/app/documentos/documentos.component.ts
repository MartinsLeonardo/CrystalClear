import { Component, OnInit } from '@angular/core';
import { Documento } from './documento.model';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  documentos = [
    new Documento('Diagrama de Casos de Uso','Os diagramas de casos de uso são utilizados para apresentar um cenário de maneira visual. Apresenta atores e as ações praticadas por este ator, com a intenção de apresentar visualmente os casos de uso do sistema e por qual perspectiva deve ser implementado.','../../assets/img/docs/casosdeuso.png'),
    new Documento('Diagrama de Classes','Apresenta classes e os de tipos de associações existentes entre cada classe representada. É possível verificar o nome das classes, atributos, métodos e relações de agregação, composição, herança e associação por meios gráficos. Segue padrões da UML.','../../assets/img/docs/classe.png'),
    new Documento('Casos de Teste','Baseando-se nos casos de uso o lista de requisitos serão definidos os casos de teste. Deve estar presente na documentação dos procedimentos de teste: _ Identificador do documento,  referências, relações com outros documentos e procedimentos. Autor do teste, requisito. _ Entradas, saídas e requisitos especiais _ Glossário, procedimentos e histórico de alterações.','../../assets/img/docs/casodeteste.JPG'),
    new Documento('Manual do Usuário','Documentação entregue ao usuário ao fim de todas as iterações, indica-se a descrição do software e de como utilizá-lo, assim como ambientes de instalação','../../assets/img/docs/manual.jpg')
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
