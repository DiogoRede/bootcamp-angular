export type Pokemon = {
    id:string,
    name:string,
    types:{
        slot:number,
        type:{
            name:string
        }
    }[],
    sprites: {
        front_default:string
    }
}