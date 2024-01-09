//const funcoes = require("./funcoes-auxiliares");
const { gets, print } = require("./funcoes-auxiliares");

/*
 *  Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados e mostre o maior numero sorteado.
 *  
    Dados de entrada>
    5
    50
    10
    98
    23

    Saida:
    98
 */
let maior;

for(let i=0;i<5;i++){
    const numero = gets();
    if(i===0){
        maior = numero;
    }else if(maior<numero){
        maior = numero
    }
}
print(maior);