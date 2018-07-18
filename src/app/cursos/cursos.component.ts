import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public faculdade: string;

  cursos: string[];
  

  constructor() {
    this.faculdade = 'Instituto Federal do Amazonas - IFAM';
   }

  ngOnInit() {
  }

}
