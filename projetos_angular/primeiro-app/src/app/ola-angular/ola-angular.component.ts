import { Component } from "@angular/core";
//a anotação espera receber um objeto JSON, que será usado para especificar as características do componente.
//Metadado da classe {}--> objeto JSON, possui chaves pre determinadas que vao ser usadas conforme a necessidade
@Component({

    //- Uma das propriedades esperadas se chama selector. Ele é utilizado para especificarmos o nome do elemento que será utilizado nas páginas HTML.
    //HTML que vc vai exibir quando usa o componente
    //Isso quer dizer que, nas páginas HTML do projeto, ele pode ser usado assim: <ola-angular></ola-angular>.

    selector: 'ola-angular', //Nome da tag que vai ser utilizada

    //A seguir, podemos especificar o template do componente. Trata-se de código HTML padrão,
   //que irá dizer a forma como o componente aparece na tela. É o HTML a ser renderizado pelo
  //navegador. Note o uso de crases para podermos pular linhas

   // template: `
  //    <p>Olá, Angular</p>
   // `,
   templateUrl: './ola-angular.component.html', //Faz referencia ao arquivo html
   styleUrls: ['./ola-angular.component.css'] //Plural, pois pode ter mais de um arquivo CSS
})

export class OlaAngularComponent{

  constructor() {}

  ngOnInit(): void {

  }

}
