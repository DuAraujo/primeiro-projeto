import { Component,
  OnInit,
  DoCheck,
  OnChanges, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  OnDestroy, 
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, DoCheck, OnChanges,
 AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input()valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngOnChanges(){
    this.log('ngOnChanges');
    this.log('mudou o valor do input property');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }


  private log(hook: string){
    console.log(hook);
  }

}
