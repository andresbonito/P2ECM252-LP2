// O componente cliente-inserir se encarrega de capturar
// os dados digitados pelo usuário. O botão de inserção de clientes também faz parte dele. Quando
// o botão for clicado, ele precisa construir um objeto cliente e informar ao componente que o
// utiliza que o evento de inserção de cliente aconteceu.
// - Vamos começar ajustando o componente cliente-inserir. Ele usará um EventEmitter para
// informar sobre o evento de inserção de cliente.

// import { Component, EventEmitter, Output } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Cliente } from '../cliente.model';
// @Component({
// selector: 'app-cliente-inserir',
// templateUrl: './cliente-inserir.component.html',
// styleUrls: ['./cliente-inserir.component.css'],
// })
// export class ClienteInserirComponent {
// @Output() clienteAdicionado = new EventEmitter<Cliente>();
// nome: string;
// fone: string;
// email: string;
// onAdicionarCliente() {
// // const cliente = {
// const cliente: Cliente = {
// nome: this.nome,
// fone: this.fone,
// email: this.email,
// };
// this.clienteAdicionado.emit(cliente);
// }



// - A seguir, o método onAdicionarCliente precisa ser alterado no arquivo cliente-
// inserir.component.ts a fim de receber o novo parâmetro adequadamente. Ele usa a propriedade
// value do parâmetro recebido para obter os valores a serem utilizado na construção do objeto
// cliente.

// onAdicionarCliente(form: NgForm) {
//   // <!-- Clique no botão Inserir Cliente para ver as validações ocorrendo. Note que a inserção ocorre
//   // mesmo que alguma validação falhe. Ocorre que todo form possui uma propriedade chamada
//   // invalid que somente é verdadeira caso todos os seus controles estejam de acordo com todas as
//   // validações aplicadas a eles. Podemos testar essa propriedade antes de fazer a inserção no método
//   // onAdicionarCliente. -->
//   if (form.invalid) {
//     return;
//   }
//   const cliente: Cliente = {
//   nome: form.value.nome,
//   fone: form.value.fone,
//   email: form.value.email,
//   };
//   this.clienteAdicionado.emit(cliente);
//   }
// }


// - A seguir, precisamos ajustar o componente de inserção de clientes no arquivo cliente-
// inserir.component.ts. Ele precisa fazer a inserção de clientes na lista mantida pelo serviço. Por
// isso, vamos injetar uma instância do serviço em seu construtor. Note que ele já não precisa emitir
// o evento que indica que um cliente foi inserido, por isso, vamos remover esse código, como na
// Listagem 2.2.7.

import { Component, EventEmitter, Output } from '@angular/core';
//remover
import { Cliente } from '../cliente.model';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
@Component({
selector: 'app-cliente-inserir',
templateUrl: './cliente-inserir.component.html',
styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {
constructor(public clienteService: ClienteService) {}
//remover
@Output() clienteAdicionado = new EventEmitter<Cliente>();
//remover
nome: string;
fone: string;
email: string;
onAdicionarCliente(form: NgForm) {
if (form.invalid) {
return;
}
//remover
const cliente: Cliente = {
nome: form.value.nome,
fone: form.value.fone,
email: form.value.email,
};
this.clienteService.adicionarCliente(
form.value.nome,
form.value.fone,
form.value.email
);
// Note que, após a inserção de um cliente, os campos permanecem com os valores digitados pelo
// usuário. Para limpá-los, podemos chamar o método resetForm de ngForm no método
// onAdicionarCliente do componente definido no arquivo cliente-inserir.component.ts.
form.resetForm();
//remover
// this.clienteAdicionado.emit(cliente);
}}

