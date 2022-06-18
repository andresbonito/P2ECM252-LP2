import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nome = "José";
  // idade = 20

  // lancarDado(): number { //Esse number do lado direito representa uma tipagem estatica
  //   return Math.floor(Math.random() * 6) + 1;
  // }




//   Uma das formas de Data Binding que citamos se chama Property Binding. Trata-se de um
// mecanismo que nos permite vincular expressões (como variáveis ou chamadas a funções) a
// propriedades de elementos do template. Por exemplo, suponha que desejamos exibir a caixa com
// o nome adicionado somente depois que o botão for clicado. Para começar, vamos adicionar uma
// variável ao componente. - Podemos vincular o valor dessa propriedade ao atributo hidden da caixa que exibe o nome no
// template. Veja a Listagem 2.4.20. Lembre-se que o operador [ ] é usado para fazer Property
// Binding.

nome;
esconderCaixa = true;




//Podemos tratar o evento “entrada de dados” no campo do form. A cada vez que o usuário
//alterar seu conteúdo, podemos fazer com que um método entre em execução. Declare uma
//variável e um método que altera seu conteúdo no arquivo app.component.ts, como na Listagem
//Repare que o objeto event representa o evento como um todo. Ele inclui diversas informações sobre o evento,
//sendo que uma delas é o texto que foi digitado. Ele pode ser encontrado em evento.target.value.


  alterarNome(nome: { target: { value: any; }; }) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
  }


  ////A seguir, definimos um método que desejamos que seja executado quando o botão for clicado.
//   - Note que o que recebemos é o próprio objeto input. Ou seja, a variável de referência referencia
// o próprio nó na árvore DOM. Como sabemos, um elemento input possui a propriedade value. Ela
// armazena o valor do campo. Ajuste o método adicionar como na Listagem 2.4.17 e veja o
// resultado no Chrome Dev Tools.
  // adicionar(nomeInput) {
  //   console.log(nomeInput.value);
  //   }


  adicionar(nomeInput) {
    this.nome = nomeInput.value;
    this.esconderCaixa = nomeInput.value.length <= 0;
    }


    numero: number;
    escolher (){
    this.numero = Math.floor(Math.random() * 100) + 1;
    }
}
