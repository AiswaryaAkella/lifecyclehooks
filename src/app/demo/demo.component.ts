import { AfterContentChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked , AfterViewInit, OnDestroy{

  @Input() value:string='Aiswarya'

  constructor(){
    console.log('constructor called');
  }

  ngOnChanges(change: SimpleChanges){
    console.log('onchanges logged');
    console.log('change');
  }
  ngOnInit(){
    console.log('ngOnInit called');
    console.log(this.value);
  }
  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
