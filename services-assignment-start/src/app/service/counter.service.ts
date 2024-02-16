import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService{
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  constructor(){}
  // constructor(private usersService: UsersService) {
    // this.usersService.inactiveToActive.subscribe(() => {
    //   this.inactiveToActiveCounter++;
    //   console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
    // });
    
    // this.usersService.activeToInactive.subscribe(() => {
    //   this.activeToInactiveCounter++;
    //   console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    // });
  // }
  incrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }
}