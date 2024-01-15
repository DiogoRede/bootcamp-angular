import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample: boolean = true;
  acao:string = 'Destruir';

  destruir(){
    this.isAliveCheckSample = !this.isAliveCheckSample;
    if(this.isAliveCheckSample){
      this.acao = 'Destruir';
    }else{
      this.acao = 'Construiir';
    }
  }
}
