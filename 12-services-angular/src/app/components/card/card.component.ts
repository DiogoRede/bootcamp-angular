import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon:Pokemon = {
    id:'0',
    name:'',
    sprites: {
      front_default:''
    },
    types:[
      {
        slot:1,
        type:{
          name:''
        }
      }
    ]
  };

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon('1').subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id:res.id,
            name:res.name,
            types:res.types,
            sprites: {
              front_default: res.sprites.front_default
            }
          }
        },
        error: (error) => console.log(error)
      }
    );
  }

  getPokemon(searchName:string){
    this.pokemonService.getPokemon(searchName.toLowerCase()).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id:res.id,
            name:res.name,
            types:res.types,
            sprites: {
              front_default: res.sprites.front_default
            }
          }
        },
        error: (error) => console.log('Pokémon não encontrado!')
      }
    );
  }

}