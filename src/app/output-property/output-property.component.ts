import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() contador:number = 0;
   //Emissor de eventos, comunicar o componente pai
  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 

  incrementa(){
    this.contador++;
    this.mudouValor.emit({novoValor: this.contador});
  }
  decrementa(){
    this.contador--;
    this.mudouValor.emit({novoValor: this.contador});
  }

}
