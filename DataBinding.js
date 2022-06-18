(Data Binding) --> Resumo especifico dele

Interpolação: {{}} na sua classe vc define expressao, chamada de metodo ou variavel e vc quer exibir no html, 
vc faz interpolacao,ai vc coloca uma variavel no meio e ela vai ser avaliada e exibido no html, a interpolação produz
a representação textual da expressão

In general, String interpolation is the process of formatting or manipulating strings. 
In Angular, Interpolation is used to display data from component to view (DOM). It is denoted by the expression of {{ }} and also known as mustache syntax.

Let’s create a simple string property in component and bind the data to view.

Add the below code in test.component.ts file as follows −

export class TestComponent implements OnInit { 
   appName = "My first app in Angular 8"; 
}

Move to test.component.html file and add the below code −

<h1>{{appName}}</h1>

Add the test component in your app.component.html file by replacing the existing content as follows −

<app-test></app-test>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



Property Binding: [] vc tem um elemento html e ele tem uma propriedade q vc quer controlar se ele
vai ser exibido ou não (estilo, hidden), ai vc vai controlar com uma variavel atraves da classe em funcao de alguma
requisicao externa

Property binding is used to bind the data from property of a component to DOM elements. It is denoted by [].

Let’s understand with a simple example.

Add the below code in test.component.ts file.

export class TestComponent { 
   userName:string = "Peter"; 
}

Add the below changes in view test.component.html,

<input type="text" [value]="userName">

Here,

userName property is bind to an attribute of a DOM element <input> tag.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Event Binding: (  ) vc usa pra fazer o vinculo de um evento (clique no botao, foco perdido ou ganho num componente),
vc associa a esse evento um metodo q vai ser executado, o metodo eh definido no componente e o evento acontece
no template.


Events are actions like mouse click, double click, hover or any keyboard and mouse actions. 
If a user interacts with an application and performs some actions, then event will be raised. It is denoted by either parenthesis () or on-. 
We have different ways to bind an event to DOM element. Let’s understand one by one in brief.
Component to view binding

Let’s understand how simple button click even handling works.

Add the following code in test.component.tsfile as follows −

export class TestComponent { 
   showData($event: any){ 
      console.log("button is clicked!"); if($event) { 
         console.log($event.target); 
         console.log($event.target.value); 
      } 
   } 
}

event∗refersthefiredevent⋅Inthisscenario,∗click∗istheevent⋅∗

event has all the information about event and the target element. Here, the target is button. $event.target property will have the target information.

We have two approaches to call the component method to view (test.component.html). First one is defined below −

<h2>Event Binding</h2> 
<button (click)="showData($event)">Click here</button>

Alternatively, you can use prefix - on using canonical form as shown below −

<button on-click = "showData()">Click here</button>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Two Way Data Binding: [()] Vc tem de um lado uma variavel e de outro lado um componente visual textual, que possivelmente 
exibe essa variavel, vc deseja que quando o componente visual for atualizado a variavel tbm seja atualizada e
vice versa, fazendo um vinculo de dados de mao dupla entre variavel e componente visual. Atualizei a variavel vinculada
o componente visual mostra o conteudo dela, o cliente digitou algo no componente visual e a variavel tbm eh atualizada.  
Quando utilizamos o Two Way Data Binding do Angular, vinculamos um campo visual a uma
variável. Seu funcionamento é o seguinte: quando o valor exibido pelo componente visual é alterado, a
variável vinculada também é alterada. Quando a variável é alterada, o valor exibido pelo componente
visual também é alterado. É uma via de dados de mão dupla. Daí o nome. 


Two-way data binding is a two-way interaction, data flows in both ways (from component to views and views to component). Simple example is ngModel.
 If you do any changes in your property (or model) then, it reflects in your view and vice versa. It is the combination of property and event binding.
 
NgModel

NgModel is a standalone directive. ngModel directive binds form control to property and property to form control. The syntax of ngModel is as follows −

<HTML [(ngModel)]="model.name" />

For example,

<input type="text" [(ngModel)]="model.name" />

Let’s try to use ngModel in our test application.

Configure FormsModule in AppModule (src/app/app.module.ts)

import { FormsModule } from '@angular/forms'; @NgModule({ 
   imports: [ 
      BrowserModule, 
      FormsModule
   ] 
}) 
export class AppModule { }

FormModule do the necessary setup to enable two-way data binding.

Update TestComponent view (test.component.html) as mentioned below −

<input type="text" [(ngModel)]="userName" />
<p>Two way binding! Hello {{ userName }}!</p>

Here,

Property is bind to form control ngModeldirective and if you enter any text in the textbox, it will bind to the property. 
After running your application, you could see the below changes −

Finally, start your application (if not done already) using the below command −


- A notação [(ngModel)]="numero" caracteriza o Two Way Data Binding. O campo visual ao qual ela
foi aplicada está vinculado à variável cujo nome aparece depois da atribuição. 