import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Angular ' + VERSION.full;

  hours: any = '0' + 0;
  minutes: any = '0' + 0;
  seconds: any = '0' + 0;

  counter: number = 0;
  timeRef;
  running = false;

  ngOnInit() {
  }

  startTimer() {
    if (!this.running) {
      this.running = true;

      this.timeRef = setInterval(() => {

        this.seconds++;
        this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

        if (this.seconds == 60) {
          this.minutes++;
          this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
          this.seconds = '0' + 0;
        }
        if (this.minutes == 60) {
          this.hours++;
          this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
          this.minutes = '0' + 0;
        }
      });
    } else {
      this.stopTimer();
    }
  }

  stopTimer() {
    this.running = false;
    clearInterval(this.timeRef);
  }

  reset() {
    this.running = false;
    clearInterval(this.timeRef);
    this.hours = this.minutes = this.seconds= '0' + 0;
  }

}
