import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-from-child',
  templateUrl: './from-child.component.html'
})
export class FromChildComponent implements OnInit {

  intervalidId = 0;
  seconds = 0;
  message = '';

  start() {
    clearInterval(this.intervalidId);
    this.seconds = this.seconds > 0 ? this.seconds : 10;

    this.intervalidId = setInterval(() => {

      if (this.seconds > 0) {
        this.seconds -= 1;
        this.message = `${this.seconds} and counting.`;
      } else {
        this.message = "over";
      }

    }, 1000);

  }

  stop() {
    clearInterval(this.intervalidId);
    this.message = `stopped at ${this.seconds}.`;
  }

  ngOnInit() {
    this.start();
    this.message = "counter started";
  }

  @Output() sendHello = new EventEmitter();

  send() {
    this.sendHello.emit('hello');
  }

  reset() {
    this.sendHello.emit('');
  }
}
