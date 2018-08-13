import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valor: number = 5;
  destroy: boolean = false;

  mudarValor(){
    this.valor++;
  }
  
  destruirCiclo(){
    this.destroy = true;
  }
}
