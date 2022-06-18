// É sempre uma boa prática de programação
// especificar o máximo de informação que pudermos em tempo de compilação. Em particular,
// temos utilizado a estrutura que representa clientes sem dizer explicitamente quais propriedades
// ela tem. A lista de clientes, neste momento, pode armazenar qualquer tipo de dado. Vamos
// especificar o tipo cliente e utilizá-lo nos componentes da aplicação.

export interface Cliente {
  nome: string;
  fone: string;
  email: string;
}
