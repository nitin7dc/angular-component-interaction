import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FromChildTwoComponent } from './from-child-two/from-child-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit{

  message = "hello again";
  friends:string[] = [];
  messageFromChild:string;

  @ViewChild('two') childTwo:FromChildTwoComponent;

  ////will add friend to our list of friends array
  add(friend){
    if(friend.value){
      this.friends.push(friend.value);    
      friend.value = "";
    }
    console.log(this.friends)
  }

  receiveHello(message) {
    this.messageFromChild = message;
    console.log(message);
  }

  start(){
    this.childTwo.start();
  }

  stop(){
    this.childTwo.stop();
  }

  ngAfterViewInit() {    
    
  }

}
