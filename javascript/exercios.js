let opcao = 0;
function menu(){

    this.opcao = prompt("--- Menu ---- \n" +
                "1. Exercício 01\n" +
                "2. Exercício 02\n" +
                "3. Exercício 03\n" +
                "4. Exercício 04\n" +
                "5. Exercício 05\n" +
                "6. Exercício 06\n" + 
                "7. Exercício 07\n" +
                "8. Exercício 08\n" +
                "9. Exercício 09\n" +
                "10. Exercício 10\n" +
                "11. Exercício 11\n" +
                "12. Exercício 12\n" +
                "13. Exercício 13\n" +
                "14. Exercício 14\n" +
                "Escolha uma das opções" 
                );
             

}

function operacao(){
    menu();

    switch(this.opcao){
        case'0':
            console.log("Obrigado!");
            break;
        case '1':
            console.log(ex1());

            break;
        case '2':
            console.log(ex2()); 
        
            break;
        case'3':
        console.log(ex3());
        
            break;
        case'4':
        console.log(ex4());
            break;    
        case'5':
        console.log(ex5());
            break; 
        case'6':
        console.log(ex6());
            break;
        case'7':
        console.log(ex7());
            break;   
        case'8':
            console.log(ex8());
                break;   
        case'9':
            console.log(ex9());
                break; 
        case'10':
            console.log(ex10());
                break; 
        case'11':
            console.log(ex11());
                break; 
        case'12':
            console.log(ex12());
                break;    
        case'13':
            console.log(ex13());
                break;      
        case'14':
            console.log(ex14());
                break;                                  
        default:
            console.log("Escolha uma das opção valida!");
            break;    
    }
}

operacao();


function ex1(){
    var a = 10;
    var b = 20;
    var aux = 0;
    console.log ("A varieavel 'a'  possui " + a + " a variavel 'b' possui o valor " + b);
    aux = a;
    a = b;
    b = aux;

    console.log (" A variavel 'a' possui " + a + " a variavel 'b' possui o valor " + b)
}

function ex2(){
    var num = 0;
    var aux = 0;

    num = prompt("Digite um numero: ");
        aux = num - 1;
        console.log('o antecessor  de ' + num + ", é " + aux);
    
}

function ex3(){

var base = 0;
var altura = 0;
var resultado = 0;
    
    base = prompt("Digite a base do retangulo");
    altura = prompt("Digite a altura do retangulo");

        if(base == altura){
            console.log("Não Rolou: ");

        }else{
            resultado = (base * altura);

            console.log ("A area do retangulo é: " + resultado);

        }
}


function ex4(){
    var resultado = 0;

     anos = parseInt(prompt("Digite a sua idade ex: 36: "));
     meses = parseInt(prompt("Digite quantos meses completos  voce  tem EX: 09"));
     dias = parseInt(prompt("Digite o dia de nascimento EX: 10 "));

     resultado = (anos * 365) + (meses * 30) + dias;
     console.log("Voce tem " + resultado + " dias de vida");

}

function ex5()
{
    var total      = 0;
    var brancos    = 0;
    var nulos      = 0;
    var validos    = 0;
    var resultado  = 0;
    var resultado1 = 0;
    var resultado2 = 0;
    var total      = prompt("Digite a quantidade de votos total: ");
    var brancos    = prompt("Digite a quantidade de votos brancos: ");
    var nulos      = prompt("Digite a quantidade de votos nulos: ");
    var validos    = prompt("Digite a quantidade de votos válidos: ");

        if (total == 0)
        {
            console.log("NaN")
        }
        else
        {
            resultado  = (parseFloat(brancos) /  (parseFloat(total) * 1.0));
            resultado1 = (parseFloat(nulos) /  (parseFloat(total) * 1.0));
            resultado2 = (parseFloat(validos) /  (parseFloat(total) * 1.0));

            console.log("A porcentagem de votos brancos é: " + resultado);
            console.log("A porcentagem de votos nulos é: " + resultado1);
            console.log("A porcentagem de votos válidos é: " + resultado2);

        }
}

function ex6()
{
    var salario   = 0;
    var percent   = 0;
    var resultado = 0;
    var salario   = prompt("Digite o salário atual: ");
    var salario   = prompt("Digite o reajuste: ");
    if (salario == 0)
    {
        console.log("NaN");
    }
    else 
    {
        resultado =  (parseFloat(salario) +  (parseFloat(salario) *  (parseFloat(percent) / 100)));
    }
    console.log("O reajuste do salário foi de: " + resultado);
}

function ex7()
{
    var fabrica   = 0;
    var resultado = 0;
    var fabrica   = prompt("Digite o valor do carro: ");
    if (fabrica == 0)
    {
        console.log("NaN");
    }
    else
    {
        resultado =  (parseFloat(fabrica) +  (parseFloat(fabrica) * 0.45 +  (parseFloat(fabrica) * 0.28)));
    }
    console.log("O custo final do carro foi de: " + resultado);
}

function ex8()
{
    var nota1     = 0;
    var nota2     = 0;
    var nota3     = 0;
    var resultado = 0;
    var nota1     = prompt("Digite a primeira nota do aluno: ");
    var nota2     = prompt("Digite a segunda nota do aluno: ");
    var nota3     = prompt("Digite a terceira nota do aluno: ");
    if (nota1 + nota2 + nota3 == 0)
    {
        console.log("NaN");
    }
    else
    {
        resultado = (parseFloat(+nota1) + (parseFloat(+nota2) + (parseFloat(+nota3) /10)));

    }
    console.log("A média deste aluno é de: " + resultado);
}

function ex9()
{
    var maca      = 1.30;
    var maca2     = 1;
    var resultado = 0;
    var pergunta  = prompt("Digite a quantidade maçãs que deseja: ");
    if (maca > 11)
    {
        resultado =  (parseFloat(maca) * (parseFloat(pergunta)));
        console.log("A(s) maçã(s) custam: " + resultado * maca);
    }
    else (maca2 < 12)
    {
        resultado = (parseFloat(maca2) * (parseFloat(pergunta)));
        console.log("As maças custam: " + resultado * maca2 );


    }


}
function ex10(){

    salario = prompt("informe o salario fixo:")

    vendas = prompt("informe o valor das vendas:")

    if (vendas > 1500){

        comissao = 0.05

        vendasComis = vendas * 0.05

    } else {

        comissao = 0.03

        vendasComis = vendas * 0.03

    }

    salarioTotal = salario * 1 + vendasComis

    console.log("salario total: " + salarioTotal)

}

function ex11(){
    nome = prompt("Informe seu Nome: ");
    console.log("Bem-Vindo! " + nome +", ao portal do SenaBank");
    conta = prompt("Por favor informe o número de sua conta: ");
    console.log("CC: " + conta);
    saldo = prompt("Agora informe seu saldo: ");
    console.log( nome + " o saldo atual é de: " + parseFloat(saldo) + "R$");
    debit = prompt("Os Débitos: ");
    credi = prompt("Ultimo! .... Créditos: ");
    salnow = (saldo - debit - credi);
    if(salnow <= 0){
       console.log(":(  Saldo Negativo!  x.X \n\n" + salnow + "R$");
       //Quero colocar uma tag de tabela aqui.
    }else{
        console.log(":)  Saldo Possitivo!  x.X \n\n" + salnow + "R$");
    }
}

function ex12(){
    do{
        valor = propmt("Informe um valor: ");
        if(valor < 10){
            console.log("Só aceitamos valores positivos!\nTente novamente");
        }else{
            valor = prompt("Voltei para linha do fluxo básico!....haushaushau não sei n tenhho documentação...emojicons");
        }
    }while(valor < 10);
    
    
}

function ex13(){


}


function ex14(){
    numero = ("Informe um valor: ");
    if(numero > 0){
        console.log("pssst!....podem ser números negativos!\n" + "          ;)  ");
        
    }else{
        
        if(contar > 1){
            Console.log("Você digitou!  " + contar + " números negativos! ");
        }else{
            Console.log("Você digitou!  " + contar + " número negativo! ");
        }
    }
}

ex1();    
ex2();
ex3();
ex4();
ex5();
ex6();
ex7();
ex8();
ex9();
ex10();
ex11();
ex12();
ex14();
