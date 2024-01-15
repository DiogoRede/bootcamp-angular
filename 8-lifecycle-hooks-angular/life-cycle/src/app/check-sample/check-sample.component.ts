import { Component, 
         OnInit,
         DoCheck, 
         AfterContentChecked, 
         AfterViewInit, 
         AfterViewChecked,
         AfterContentInit,
         OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, 
  DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked,AfterContentInit, OnDestroy {

  quantidade:number = 0;

  increment(){
    this.quantidade++;
  }

  decrement(){
    this.quantidade--;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}