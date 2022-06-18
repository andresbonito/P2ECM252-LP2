import { Component, OnInit } from '@angular/core';
//define também um construtor padrão e a classe implementa a interface OnInit, incluindo um método que ela define.


//- Perceba também que não foi necessário adicionar o componente ao módulo da aplicação. Isso
//ocorre pois o próprio Angular CLI o fez.

@Component({
  selector: 'app-ola-angular-cli',
  templateUrl: './ola-angular-cli.component.html',
  styleUrls: ['./ola-angular-cli.component.css']
  })
  export class OlaAngularCliComponent {
  }
