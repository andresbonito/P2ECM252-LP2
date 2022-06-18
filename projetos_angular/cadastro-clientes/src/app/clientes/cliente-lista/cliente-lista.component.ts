// import { Component, OnInit, Input } from '@angular/core';
// import { Cliente } from '../cliente.model';

// @Component({
// selector: 'app-cliente-lista',
// templateUrl: './cliente-lista.component.html',
// styleUrls: ['./cliente-lista.component.css'],
// })
// export class ClienteListaComponent implements OnInit {
// clientes = [
// {
// nome: 'José',
// fone: '11223344',
// email: 'jose@email.com',
// },
// {
// nome: 'Maria',
// fone: '22334455',
// email: 'maria@email.com',
// },
// ];

// - O componente principal da aplicação precisa entregar a lista de clientes para o componente
// responsável por exibi-la. Embora ele já possua uma lista, ela ainda não é uma propriedade com a
// qual se possa estabelecer vínculo. Para tornar isso possível, usamos a anotação Input. Veja o
// ajuste a ser feito no arquivo cliente-lista.component.ts

// @Input() clientes = [];

// @Input() clientes: Cliente[] = [];

// constructor() {}
// ngOnInit(): void {}
// }

// - A seguir, precisamos injetar uma instância do serviço no componente responsável por exibir os
// clientes, definido no arquivo cliente-lista.component.ts. A injeção de dependências sempre
// ocorre no construtor do componente

// import { Component, OnInit, Input } from '@angular/core';
// import { Cliente } from '../cliente.model';
// import { ClienteService } from '../cliente.service';
// @Component({
// selector: 'app-cliente-lista',
// templateUrl: './cliente-lista.component.html',
// styleUrls: ['./cliente-lista.component.css'],
// })

// export class ClienteListaComponent implements OnInit {
// @Input() clientes: Cliente[] = [];
// constructor(public clienteService: ClienteService) {}

// // Feita a injeção de dependência, o componente já pode utilizar a lista que o serviço oferece. Para
// // isso, usaremos o método ngOnInit da interface OnInit que precisa ser implementada pela
// // classe. Ele executa automaticamente assim que o componente é construído. É recomendável
// // utilizá-lo para esse fim e reservar o construtor para as injeções de dependência. A Listagem 2.2.6
// // mostra seu uso.
// ngOnInit(): void {
//   this.clientes = this.clienteService.getClientes();
//   }
// }

// - Também podemos remover a anotação @Input no componente ClienteListaComponent, no
// arquivo cliente-lista.component.ts.

// import { Component, OnInit } from '@angular/core';
// import { Cliente } from '../cliente.model';
// import { ClienteService } from '../cliente.service';
// @Component({
//   selector: 'app-cliente-lista',
//   templateUrl: './cliente-lista.component.html',
//   styleUrls: ['./cliente-lista.component.css'],
// })
// export class ClienteListaComponent implements OnInit {
//   clientes: Cliente[] = [];
//   constructor(public clienteService: ClienteService) {}
//   // ngOnInit(): void {
//   //   this.clientes = this.clienteService.getClientes();
//   // }

//   ngOnInit(): void {
//     this.clientes = this.clienteService.getClientes();
//     this.clienteService
//     .getListaDeClientesAtualizadaObservable()
//     .subscribe((clientes: Cliente[]) => {
//     this.clientes = clientes;
//     });
//     }
// }

// Quando o componente for destruído desejamos remover o registro do Observable, caso
// contrário ele permanecerá existindo na memória, caracterizando um vazamento de memória.
// Para isso, começamos armazenando o retorno do método subscribe em uma variável do tipo
// Subscription

// import { Component, OnInit } from '@angular/core';
// import { Cliente } from '../cliente.model';
// import { ClienteService } from '../cliente.service';
// import { Subscription, Observable } from 'rxjs';
// @Component({
//   selector: 'app-cliente-lista',
//   templateUrl: './cliente-lista.component.html',
//   styleUrls: ['./cliente-lista.component.css'],
// })
// export class ClienteListaComponent implements OnInit {
//   clientes: Cliente[] = [];
//   private clientesSubscription: Subscription;
//   constructor(public clienteService: ClienteService) {}
//   ngOnInit(): void {
//     this.clientes = this.clienteService.getClientes();
//     this.clientesSubscription = this.clienteService
//       .getListaDeClientesAtualizadaObservable()
//       .subscribe((clientes: Cliente[]) => {
//         this.clientes = clientes;
//       });
//   }
// }

// Com o objeto Subscription em mãos, podemos remover o registro quando o componente for
// destruído. Para isso, vamos fazer com que a classe ClienteListaComponent implemente a
// interface OnDestroy. Ela define um método chamado ngOnDestroy que entra em execução
// automaticamente quando o componente é destruído.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit, OnDestroy {
  clientes: Cliente[] = [];
  private clientesSubscription: Subscription;
  constructor(public clienteService: ClienteService) {}
//   Note que o componente ClienteListaComponent ainda lida com o método getClientes como
// se ele devolvesse uma lista de clientes, o que já não é o caso. Na verdade, basta que ele chame
// esse método para que a lista seja atualizada. Como ele se registrou como observador da lista de
// clientes do serviço, assim que ela for atualizada ele será avisado.
  ngOnInit(): void {
    this.clienteService.getClientes();
    this.clientesSubscription = this.clienteService
    .getListaDeClientesAtualizadaObservable()
    .subscribe((clientes: Cliente[]) => {
    this.clientes = clientes;
    });
    }
  // ngOnInit(): void {
  //   this.clientes = this.clienteService.getClientes();
  //   this.clientesSubscription = this.clienteService
  //     .getListaDeClientesAtualizadaObservable()
  //     .subscribe((clientes: Cliente[]) => {
  //       this.clientes = clientes;
  //     });
  // }
  ngOnDestroy(): void {
    this.clientesSubscription.unsubscribe();
  }
}
