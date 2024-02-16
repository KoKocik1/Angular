import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalChange(newNumber: number): void {
    if (newNumber % 2 === 0) this.evenNumbers.push(newNumber);
    else this.oddNumbers.push(newNumber);
  }
  onIntervalReset(): void {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}
