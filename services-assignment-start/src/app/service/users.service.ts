import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  // activeToInactive = new EventEmitter<void>();
  // inactiveToActive = new EventEmitter<void>();

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    // this.activeToInactive.emit();
    this.counterService.incrementActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    // this.inactiveToActive.emit();
    this.counterService.incrementInactiveToActive();
  }

  constructor(private counterService: CounterService) { }
}
