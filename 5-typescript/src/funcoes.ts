function somar(n1:number, n2:number): number{
    return n1+n2;
}

let continha:number = somar(1,2);
console.log(continha); // OUTPUT: 3

function saudacoes(nome:string):string{
    return `Bem vindo, ${nome}!`;
}
console.log(saudacoes("Diogo")); // OUTPUT: Bem vindo, Diogo!


function ligar(telefone: string | number): string | number{
    // Pode receber/retornar um number ou string
    return telefone;
}
console.log(ligar("18996502420"));
console.log(ligar(18996502420));

// ASYNC

async function getDados(id:number): Promise<string>{
    return "Diogo";
}