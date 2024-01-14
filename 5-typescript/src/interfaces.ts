// INTERFACES (type x interface)

/** Quando usar cada um?
 *  if(class)
 *      Usar interface quando estamos falando de class. (implements)
 *  else: 
 *      Usar type.
 */

type robot = {
    // readonly (não pode mexer, apenas leitura)
    readonly id: number,
    nome: string,
}

interface robot1 {
    readonly id: number,
    nome: string
}

const bot: robot = {
    id: 1,
    nome: 'Mael'
}

const bot1: robot1 = {
    id:2,
    nome: 'Diogo'
}