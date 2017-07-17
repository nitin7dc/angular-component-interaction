import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-child-two',
  templateUrl: './from-child-two.component.html'
})
export class FromChildTwoComponent implements OnInit {

  constructor() {
    this.start();
   }

  ngOnInit() {    
  }

   /********************************************************
   * Parent communication part two
   *********************************************************/
  message:string;
  counter:number = 0;
  counterId;

  start(){
    this.counterId = setInterval(() => {
      this.counter++;
      this.message = `I'm counting : ${this.counter}`;
    }, 1000);
  }

  stop(){
    clearInterval(this.counterId);
    this.message = `I'm stopped at ${this.counter}`;
  }

  ngOnDestroy(){
    clearInterval(this.counterId);
  }

}
