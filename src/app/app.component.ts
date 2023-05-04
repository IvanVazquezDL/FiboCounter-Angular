import { Component } from '@angular/core';
import { FibonacciNumbers } from './interfaces/FibonacciNumbers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'counterFibo';
  position : number = 0;
  fibo : number = 0;
  fibonacciNumbers: FibonacciNumbers = {
    0:0,
    1:1
  }

  fib(position: number): number {
    if (position <= 0) return 0;
    if (this.fibonacciNumbers[position]) return this.fibonacciNumbers[position];
    const result = this.fib(position - 1) + this.fib(position - 2);
    this.fibonacciNumbers[position] = result;
    return result;
  }
  
  fibonacciByPosition(position: number): void {
    if (position < 0) return;
    const result = this.fib(position);
    this.fibo = result;
    this.position = position;
  }

}
