import { Component } from '@angular/core';
import { interval } from 'rxjs';
import {takeWhile} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-electron';

  max = 1;
  current = 0;

  start() {
    // const interval = Observable.interval(100);

    // interval(100)
    // .takeWhile(_ => !this.isFinished)
    // .do(i => this.current += 0.1)
    // .subscribe();

    const observable$ = interval(100);
    const interval$ = observable$.pipe(takeWhile(val => !this.isFinished));
    interval$.subscribe(i => this.current += 0.1);
  }
  

  /// finish timer
  finish() {
    this.current = this.max;
  }

  /// reset timer
  reset() {
    this.current = 0;
  }

  //Getter per prevenire errori di tipo NaN 
  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }

}

