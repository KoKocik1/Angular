import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { CounterService } from './service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers = [];
  inactiveUsers = [];

 constructor(private usersService: UsersService, private counterService: CounterService){}

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
