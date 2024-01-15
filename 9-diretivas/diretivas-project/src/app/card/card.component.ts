import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = [];

  menuType:string = 'admin';

  constructor() {
    this.produtos = [
      'mouse',
      'tenis',
      'chinelo',
      'fone'
    ];
  }

  adicionar(){
    this.produtos.push('produto1');
  }

  remover(index:number){
    this.produtos.splice(index, 1);
  }

  ngOnInit(): void {
  }

}