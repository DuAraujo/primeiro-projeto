
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public faculdade: string;

  cursos: string[];
  

  constructor(private cursoService: CursosService) {
    this.faculdade = 'Instituto Federal do Amazonas - IFAM';

   this.cursos = this.cursoService.getCursos();

   }

  ngOnInit() {
  }

}
