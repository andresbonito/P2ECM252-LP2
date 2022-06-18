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
