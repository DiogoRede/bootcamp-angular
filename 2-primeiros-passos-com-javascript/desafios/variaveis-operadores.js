/*  Faça um programa para calcular o valor de uma viagem 

    Você terá 3 variaveis:
        1 - Preço de combustivel;
        2 - Gasto medio de combustivel do carro por KM;
        3 - Distancia em KM da viagem.
    
    imprimir o valor gasto.

*/

const preco_combustivel = 5.79;
let gasto_km = 12;
let distancia_km = 1580;

console.log(`Valor gasto: ${(preco_combustivel*(distancia_km/gasto_km)).toFixed(2)}`);