Linguagens tipadas:
-tipagem estática X tipagem dinâmica


Linguagens estaticamente tipadas

Uma linguagem é definida como estaticamente tipada quando a pessoa que está programando precisa 
informar explicitamente o tipo de cada dado utilizado no sistema: variáveis, parâmetros de funções, valores de retorno, etc. 
Uma vez definido o tipo, estas variáveis estão restritas ao tipo declarado; a checagem (type checking) 
é feita na compilação do programa ou em tempo de execução (runtime), dependendo se a linguagem for compilada ou interpretada.

String mensagem = "Alura";
Int32 numero = 100;
bool status = true;

No exemplo acima foram declaradas três variáveis, cada uma com um tipo de dado diferente: String para o texto, 
Int32 para um número inteiro de 32 bits e bool para um tipo booleano (no caso, true). 
Uma vez definido, o tipo de dado na variável não pode mais ser modificado; variáveis declaradas como string, por exemplo, só poderão receber dados desse tipo.
Algumas linguagens estaticamente tipadas trabalham com a chamada inferência de tipo, 
técnica em que o programa consegue determinar sozinho o tipo da variável sem que seja necessário deixar essa informação explícita no código. 
Porém, a checagem de tipos continua ocorrendo normalmente.

Linguagens com tipagem estática não permitem ao desenvolvedor alterar o tipo da variável depois de declarada. 
Geralmente a verificação de tipo é feita em tempo de compilação. Podemos ver o exemplo abaixo na linguagem Java:

public class MyClass {
    public static void main(String args[]) {
      int variavel = 10;

      variavel = "Elton Fonseca"; //error: incompatible types: String cannot be converted to int
    }
}

Quando tentamos atribuir um valor de um tipo diferente do que foi declarado na variável temos um erro. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////
Linguagens dinamicamente tipadas

O tipo é determinado (inferido) em runtime (ou tempo de execução) de acordo com o valor do dado, e não a partir da variável.

Nestes casos, o programa observa qual é o tipo de cada dado que está sendo declarado do código e, a partir disso, determina a tipagem. 
A sintaxe não exige que se informe explicitamente o tipo quando definimos variáveis; 
em algumas linguagens é possível informar explicitamente o tipo de dado, mas não é obrigatório.


A tipagem dinâmica está ligado a habilidade da linguagem de programação em escolher o tipo de dado de acordo com o valor atribuído à 
variável em tempo de execução dinamicamente. Veja o exemplo abaixo na linguagem PHP:

$variavel = "Elton Fonseca";

echo gettype($variavel); //string

$variavel = 340;

echo gettype($variavel); //integer

$variavel = 340.89;

echo gettype($variavel); //double

$variavel = true;

echo gettype($variavel); //boolean

Muita gente confunde, acha que linguagem de tipagem dinâmica não possui tipos. Na verdade, ela possui tipos normalmente, 
a diferença está apenas na capacidade da linguagem em escolher o tipo automaticamente. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////

Vamos ver um exemplo da diferença entre tipagem estática e dinâmica:

public int add(int a, int b) {
 return a + b;
}

Na função acima, os tipos dos parâmetros e do retorno estão explícitos, e a função só irá aceitar dados do tipo int (números inteiros), 
e também só vai devolver (ou retornar) dados do tipo int.

function soma(a, b) {
 return a + b;
}

Na função acima não há nenhuma indicação de tipo. O tipo, que será recebido pelos parâmetros da função, será definido durante a execução do programa. 
Além disso, a mesma função pode, pelo exemplo acima, receber tanto dados do tipo int (números inteiros) como float (números de ponto flutuante).

Alguns exemplos de linguagens com tipagem dinâmica são: JavaScript, Python, PHP, Ruby, entre outras.

Conclusão

    Na tipagem estática, o tipo é inferido pela variável e a checagem (type checking) é feita durante a compilação;

    Na tipagem dinâmica, o tipo é inferido pelo valor do dado e a checagem (type checking) é feita em tempo de execução (runtime);

    Linguagens estaticamente tipadas têm uma performance de execução melhor, pois durante a execução o código já foi “traduzido” 
    para linguagem máquina e a checagem/tipagem das variáveis já foi feito;

    Por outro lado, linguagens dinamicamente tipadas costumam ser mais ágeis durante o desenvolvimento e também são mais flexíveis.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(Data Binding) --> Resumo especifico dele

Interpolação: {{}} na sua classe vc define expressao, chamada de metodo ou variavel e vc quer exibir no html, 
vc faz interpolacao,ai vc coloca uma variavel no meio e ela vai ser avaliada e exibido no html, a interpolação produz
a representação textual da expressão

Property Binding: [] vc tem um elemento html e ele tem uma propriedade q vc quer controlar se ele
vai ser exibido ou não (estilo, hidden), ai vc vai controlar com uma variavel atraves da classe em funcao de alguma
requisicao externa

Event Binding: (  ) vc usa pra fazer o vinculo de um evento (clique no botao, foco perdido ou ganho num componente),
vc associa a esse evento um metodo q vai ser executado, o metodo eh definido no componente e o evento acontece
no template.

Two Way Data Binding: [()] Vc tem de um lado uma variavel e de outro lado um componente visual textual, que possivelmente 
exibe essa variavel, vc deseja que quando o componente visual for atualizado a variavel tbm seja atualizada e
vice versa, fazendo um vinculo de dados de mao dupla entre variavel e componente visual. Atualizei a variavel vinculada
o componente visual mostra o conteudo dela, o cliente digitou algo no componente visual e a variavel tbm eh atualizada.  
Quando utilizamos o Two Way Data Binding do Angular, vinculamos um campo visual a uma
variável. Seu funcionamento é o seguinte: quando o valor exibido pelo componente visual é alterado, a
variável vinculada também é alterada. Quando a variável é alterada, o valor exibido pelo componente
visual também é alterado. É uma via de dados de mão dupla. Daí o nome. 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Conceitos:

-Componentes: Um dos conceitos mais importantes do Angular é a criação de componentes.
Quando criamos um componente, estamos de certa forma estendendo a linguagem HTML. Ou
seja, adicionando a ela novos elementos que podem ser usados lado a lado com os elementos do
HTML como p, div etc. Um componente possui um aspecto visual e possivelmente
comportamento dinâmico, que podemos especificar

Sua definição visual é
feita com HTML simples. Associadas à definição visual, podemos ter diversas funcionalidades, o
que torna cada componente Angular dinâmico, podendo ter comportamento e aspecto visual
diferente em tempo de execução. Além disso, componentes tendem a ser blocos facilmente
reutilizáveis, quando bem projetados.
A seguir, crie um arquivo chamado ola-angular.component.ts. Note que o sufixo component
é somente uma convenção. Não é obrigatório, mas é recomendado pela documentação oficial.

- Para criar um componente, precisamos criar uma classe, como na Listagem 2.2.1.

Listagem 2.2.1
export class OlaAngularComponent {
}
- Note que se trata de uma simples classe. Para que o Angular a considere como um componente,
vamos decorá-la, como na Listagem 2.2.2. Note que, para usar a anotação Component,
precisamos importá-la do pacote core do Angular. Note, também, que a anotação espera receber
um objeto JSON, que será usado para especificar as características do componente.

Listagem 2.2.2
import { Component } from '@angular/core';
@Component({
})
export class OlaAngularComponent {
}

- Um componente precisa fazer parte de um módulo (veremos sobre isso adiante). O único
módulo da aplicação no momento pode ser encontrado no arquivo app.module.ts. Abra esse
arquivo e ajuste o seu conteúdo como na Listagem 2.2.6.
Listagem 2.2.6
import { OlaAngularComponent } from './ola-angular/ola-angular.component';
@NgModule({
declarations: [
AppComponent,
OlaAngularComponent
],
imports: [
BrowserModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

IMPORTANTE:
Somente os arquivos importados pelo compontente podem alterar seu conteúdo.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-selector:Ele é utilizado para especificarmos o nome
do elemento que será utilizado nas páginas HTML. Na Listagem 2.2.3 escolhemos o seletor ola-
angular. Isso quer dizer que, nas páginas HTML do projeto, ele pode ser usado assim: <ola-
angular></ola-angular>.

Listagem 2.2.3
@Component({
selector: "ola-angular"
})
export class OlaAngularComponent {
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-Template: Trata-se de código HTML padrão,
que irá dizer a forma como o componente aparece na tela. É o HTML a ser renderizado pelo
navegador. Note o uso de crases para podermos pular linhas. Veja a Listagem 2.2.4.

Listagem 2.2.4

@Component({
selector: "ola-angular",
template: `
<p>Olá, Angular</p>
`
})
export class OlaAngularComponent {
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-Criar componente automatizado

- O Angular CLI pode automatizar esse processo. Para criar um componente como Angular
CLI, use o seguinte comando
ng generate component ola-angular-cli
- Note que ele criou quatro arquivos. Os três conhecidos e um outro, cujo nome tem como fixo
spec.ts. Trata-se de um arquivo que pode ser utilizado para testes e que não será utilizado no
momento.
- Repare que o arquivo ola-angular-cli.component.ts possui essencialmente a mesma estrutura
que vimos até então. Fora isso, ele define também um construtor padrão e a classe implementa a
interface OnInit, incluindo um método que ela define. Não utilizaremos nada disso por
enquanto.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-Event: Digite algo no campo textual e veja o resultado no console do Chrome Dev Tools. Repare que o
objeto event representa o evento como um todo. Ele inclui diversas informações sobre o evento,
sendo que uma delas é o texto que foi digitado.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-variável de referência de template: trata-se de um nome que
podemos associar a um elemento do template. A sintaxe usada para isso é #nomeDesejado. Uma
vez definido um nome, o elemento pode ser referenciado por ele. Ela somente pode ser
referenciada no próprio template, o componente não tem acesso a ela.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-PILHA MEAN: 
2.1 (Entendendo a pilha MEAN) Os quatro itens que compõem a pilha MEAN são descritos a
seguir.
MongoDB: Trata-se de um Sistema Gerenciador de Banco de Dados cujo modelo de dados é
baseado em documentos. Ele se encaixa na classe de sistemas conhecida como NoSQL.
Express: O desenvolvimento de servidores que utilizam o protocolo HTTP pode ser um tanto
trabalhoso. O Express é um framework próprio para NodeJS que visa simplificar o código para
tratamento de requisições HTTP, evitando que tenhamos que escrever código repetido.
Angular: O Angular é um dos principais frameworks Front End nos dias atuais. Trata-se de uma
solução que tem como um de seus principais objetivos simplificar o desenvolvimento de Single
Page Applications.
NodeJS: É uma solução que viabiliza a escrita de código Javascript que executa do lado do
servidor.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ngModel- Usado no Two Way data binding. Lembre-se de que a diretiva ngModel faz parte do módulo FormsModule que precisa ser
importado por algum módulo de nossa aplicação. Creates a FormControl instance from a domain model and binds it to a form control element.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Angular Material-é uma biblioteca de componentes
Angular. O aspecto visual de seus componentes segue as recomendações da especificação
Material Design.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

matInput- matInput is a directive that allows native <input> and <textarea> elements to work with <mat-form-field>. 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<mat-form-field>- is a component used to wrap several Angular Material components and apply common Text field styles such as the underline, 
floating label, and hint messages.
In this document, "form field" refers to the wrapper component <mat-form-field> and "form field control" 
refers to the component that the <mat-form-field> is wrapping (e.g. the input, textarea, select, etc.)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Expansion Panel- componente interessante para a exibição de listas.
- Segundo a documentação oficial, seu uso básico consiste em um componente principal
chamado mat-accordion que engloba um mat-expansion-panel. Por sua vez, um mat-
expansion-panel pode ter um mat-expansion-panel-header (que pode armazenar o título da
lista, por exemplo) e algum conteúdo simples logo abaixo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*ngFor- exibir os elementos existentes na lista --> VER MAIS NO PDF ESPECIFICO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*ngIf- Para renderizarelementos de forma condicional --> VER MAIS NO PDF ESPECIFICO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
EventEmitter- Use in components with the @Output directive to emit custom events synchronously or asynchronously, 
and register handlers for those events by subscribing to an instance. --> VER MAIS NO PDF ESPECIFICO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
forms-. Isso pode ser de interesse pois tende a facilitar atividades com a validação de dados, por
exemplo.Todo form possui uma propriedade chamada
invalid que somente é verdadeira caso todos os seus controles estejam de acordo com todas as
validações aplicadas a eles.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ngForm-Creates a top-level FormGroup instance and binds it to a form to track aggregate form value and validation status.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mat-error-A biblioteca Angular Material possui componentes apropriados para a exibição de mensagens
de erro
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Servico:O acesso à lista de clientes pode ser centralizado em
um serviço, o que pode facilitar o acesso à ela por diferentes componentes. Assim, por exemplo,
não será necessário fazer com que o componente que o componente principal entregue a lista de
clientes ao componente que a exibe. Cada um deles terá uma referência a uma instância do
serviço.m serviço pode ser
implementado como uma classe Typescript. Ela terá uma lista e um método que dá acesso a uma
cópia dela. Veja a Listagem 2.2.1.
Listagem 2.2.1
import { Cliente } from './cliente.model';
export class ClienteService {
private clientes: Cliente[] = [];
getClientes(): Cliente[] {
return [...this.clientes];
}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
A injeção de dependências sempre ocorre no construtor do componente.
Injectable, como mostra a Listagem 2.2.5. Há uma hierarquia de injetores de dependência e
podemos escolher a partir de qual componente a injeção ocorrerá, o que tem a ver com a
propriedade providedIn. Estudaremos ela mais à frente.
Listagem 2.2.5
@Injectable({ providedIn: 'root' })
export class ClienteService {
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
OnInit-A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. 
Define an ngOnInit() method to handle any additional initialization tasks.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ngOnInit-Ele executa automaticamente assim que o componente é construído. É recomendável
utilizá-lo para esse fim e reservar o construtor para as injeções de dependência.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Observables-Observables are lazy Push collections of multiple values. They fill the missing spot in the following table:
começamos instanciando
um objeto “observável”, capaz de gerar eventos, que no Angular recebe o nome Subject
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
next e EventEmitter- Ele simboliza que um evento aconteceu.
Assim, objetos observadores (Observable do pacote rxjs) podem reagir quando esse evento
acontecer.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
método subscribe-Ele permite que especifiquemos duas funções. A primeira executa quando a
notificação ocorrer com sucesso. A segunda somente executa caso ocorra algum erro. No
momento utilizaremos somente a primeira. Quando o componente for destruído desejamos remover o registro do Observable, caso
contrário ele permanecerá existindo na memória, caracterizando um vazamento de memória.
Para isso, começamos armazenando o retorno do método subscribe em uma variável do tipo
Subscription
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
onDestroy e ngOnDestroy: Com o objeto Subscription em mãos, podemos remover o registro quando o componente for
destruído. Para isso, vamos fazer com que a classe ClienteListaComponent implemente a
interface OnDestroy. Ela define um método chamado ngOnDestroy que entra em execução
automaticamente quando o componente é destruído.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
resetForm-- Note que, após a inserção de um cliente, os campos permanecem com os valores digitados pelo
usuário. Para limpá-los, podemos chamar o método resetForm de ngForm no método
onAdicionarCliente do componente definido no arquivo cliente-inserir.component.ts.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
mat-action-row-adicionar botões que irão permitir a realização de outras operações CRUD sobre cada
cliente da lista. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
funcao use- A função use pode receber outros argumentos, como o “path” que o usuário deve digitar no
navegador para disparar determinada função. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
metodo status- o método status permite especificar o código de status definido pelo protocolo HTTP.