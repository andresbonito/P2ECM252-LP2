import { Component } from '@angular/core';
import { Cliente } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Ajuste a função onClienteAdicionado para que ela adicione o cliente recebido a uma lista. A
// lista precisa ser definida pelo componente principal. Ela será entregue ao componente
// responsável pela exibição dos clientes em breve.
export class AppComponent {
  // clientes = [];
  clientes: Cliente[] = [];
  onClienteAdicionado(cliente) {
    this.clientes = [...this.clientes, cliente];
  }
}
