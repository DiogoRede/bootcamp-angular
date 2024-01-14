/* Tipos no TS */

// Primitivos: string, boolean e number.

let nome: string = "Diogo";
let ligado: boolean = true;
let idade: number = 20;

// Especiais: null e undefined (não tenho ideia em qual situação é valido usar isso)

let nulo: null = null;
let indefinido: undefined = undefined;

// Abrangentes: void, any

let sobrenome: any = "Rede";
let altura: any = 1.75;
let nada: void;

/* Objeto */

// Não é uma boa pratica - porque não é tipado
let produto:object = {
    nome: 'Mouse',
    preco: 299,
    quantidade: 1
};

type Produto = {
    id: number,
    nome: string,
    preco: number,
    quantidade: number,
};

let produtoMouse: Produto = {
    id: 1,
    nome: "Mouse games",
    preco: 523,
    quantidade: 100,
};

/* ARRAY */

let nomes: string[] = ["Diogo", "Felipe", "Gabriel"];
let nomes2: Array<string> = ["Diogo", "Felipe", "Gabriel"];

/* ARRAY MULTI TYPES*/

// Pensar pois podemos criar um objeto para tipar :D
let nomeAndIdade: (string | number)[] = ["Diogo", 20, "Cassiano", 19, "Gabriel", 26];

/* TUPLA */ // OBS: SEMPRE NA MESMA ORDEM

let boleto:[string, number, number] = ["Agua", 100, 200];

/* ARRAY metodos*/ // Todos os metodos se mantém do JS

nomes.push("Robson");
nomes.pop();

/* DATAS */

let aniversario: Date = new Date("2024-01-13 20:20");
console.log(`aniversario - ${nomeAndIdade}`);