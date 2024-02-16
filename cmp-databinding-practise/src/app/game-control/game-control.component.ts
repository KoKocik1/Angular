import {
  Component,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  gameStarted = false;
  number = 0;
  intervalId: any;
  constructor() {}

  @Output() intervalFired = new EventEmitter<number>();
  @Output() intervalReset = new EventEmitter<void>();


  ngOnInit() {}

  onStartGame() {
    if (this.gameStarted) return;
    this.gameStarted = true;
    this.intervalReset.emit();
    this.intervalId = setInterval(() => {
      this.intervalFired.emit(this.number++);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
      this.gameStarted = false;
      this.number = 0;
  }
}
