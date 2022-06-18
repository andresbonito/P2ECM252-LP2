// // O acesso à lista de clientes pode ser centralizado em
// // um serviço, o que pode facilitar o acesso à ela por diferentes componentes. Assim, por exemplo,
// // não será necessário fazer com que o componente que o componente principal entregue a lista de
// // clientes ao componente que a exibe. Cada um deles terá uma referência a uma instância do
// // serviço.
// // - Na pasta clientes, crie um novo arquivo chamado cliente.service.ts. Um serviço pode ser
// // implementado como uma classe Typescript. Ela terá uma lista e um método que dá acesso a uma
// // cópia dela.

// import { Cliente } from './cliente.model';
// export class ClienteService {
// private clientes: Cliente[] = [];
// getClientes(): Cliente[] {
// return [...this.clientes];
// }

// // Também cabe ao serviço fazer a adição de clientes. O método da Listagem 2.2.2 se encarrega
// // dessa tarefa.

// adicionarCliente(nome: string, fone: string, email: string) {
//   const cliente: Cliente = {
//   nome: nome,
//   fone: fone,
//   email: email,
//   };
//   this.clientes.push(cliente);
//   }
// }

// No futuro, a lista de clientes será obtida a partir de um servidor remoto. Idealmente, as
// operações que a envolvem devem ser realizadas de maneira assíncrona. Para isso, vamos aplicar
// a API de Observables do pacote rxjs. No arquivo clientes.service.ts, começamos instanciando
// um objeto “observável”, capaz de gerar eventos, que no Angular recebe o nome Subject.

import { Cliente } from './cliente.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();
  constructor (private httpClient: HttpClient){
  }
  getClientes(): void {
    this.httpClient.get <{mensagem: string, clientes:
    Cliente[]}>('http://localhost:3000/api/clientes').subscribe(
    (dados) => {
    this.clientes = dados.clientes;
    this.listaClientesAtualizada.next([...this.clientes]);
    }
    )
    }
  adicionarCliente(nome: string, fone: string, email: string) {
    const cliente: Cliente = {
      nome: nome,
      fone: fone,
      email: email,
    };
    this.httpClient.post<{mensagem: string}> ('http://localhost:3000/api/clientes',
cliente).subscribe(
(dados) => {
console.log(dados.mensagem);
this.clientes.push(cliente);
this.listaClientesAtualizada.next([...this.clientes]);
}

)
  }
    // A seguir, no método adicionarCliente do serviço, utilizamos seu método next cujo
// funcionamento é análogo ao emit de EventEmitter. Ele simboliza que um evento aconteceu.
// Assim, objetos observadores (Observable do pacote rxjs) podem reagir quando esse evento
// acontecer.
  //   this.listaClientesAtualizada.next([...this.clientes]);
  // }

//   Para permitir que componentes registrem observadores vinculados à lista atualizada do serviço,
// vamos definir um novo método que devolve um Observable, ainda no serviço.

 getListaDeClientesAtualizadaObservable() {
   return this.listaClientesAtualizada.asObservable();
  }


//     - Os componentes interessados em obter uma cópia da lista toda vez que ela for atualizada
// utilizarão este método para obter o objeto Observable e, a seguir, chamar o método subscribe
// sobre ele. Ele permite que especifiquemos duas funções. A primeira executa quando a
// notificação ocorrer com sucesso. A segunda somente executa caso ocorra algum erro. No
// momento utilizaremos somente a primeira. Vamos atualizar o componente no arquivo cliente-
// lista.component.ts para que ele faça uso dessa estrutura.
}
