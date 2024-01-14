class Conta {
    readonly id:number;
    email:string;

    constructor(id:number, email:string){
        this.id = id;
        this.email = email;
    }

    logar(email:string): boolean{
        return this.email === email;
    }
}

class Personagem extends Conta{
    nome:string;
    classe?:string;
    nivel: number;

    /* PRIVATE, PUBLIC E PROTECTED */

    constructor(id:number, email:string, nome:string, nivel:number){
        super(id, email);
        this.nome = nome;
        this.nivel = nivel;
    }

    atacar(): void{
        console.log(`Força do seu atack = ${this.nivel*2}`);
    }
}

const conta = new Conta(2, "conta@gmail.com");

const personagem1 = new Personagem(1, "diogorede2021@gmail.com","Diogo", 1);
personagem1.classe = "Humano";

if(personagem1.logar("diogorede2021@gmail.com")){
    personagem1.atacar();
}