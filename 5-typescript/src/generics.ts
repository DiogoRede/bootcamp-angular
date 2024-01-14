function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,2,3],[4,5,6]);

const strArray = concatArray<string[]>(["diogo","rede"], ["araujo"]);

console.log(numArray);
 // OUTPUT: [1,2,3,4,5,6] (usar any[] pode quebrar codigo pois pode ser adicionado outros tipos de variaveis)