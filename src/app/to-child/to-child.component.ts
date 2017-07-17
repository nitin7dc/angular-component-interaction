import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-child',
  templateUrl: './to-child.component.html'
})
export class ToChildComponent implements OnInit {

  //add input decorators to variables where you 
  //want to receive data from parent component.
  @Input() message:string;
  @Input() friends:string[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(val){
    console.log("change detected");
    console.log(val);    
  }
  
}
