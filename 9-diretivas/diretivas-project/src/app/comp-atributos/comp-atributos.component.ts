import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string='enable';

  corFundo:string = 'red';

  itens:string[] = [];

  itemCarrinho:boolean = false;

  item:string = '';

  adicionarItem(){
    if(!this.itemCarrinho){
      this.itemCarrinho = true;
    }
    this.itens.push(this.item);
    this.item = '';
  }

  trocar(){
    if(this.estilo==='enable'){
      this.estilo = 'disable';
    }else{
      this.estilo = 'enable';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
