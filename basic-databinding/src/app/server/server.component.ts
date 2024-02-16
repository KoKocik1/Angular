import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  styles: [`
  .online {
    color: white;
  }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getServerStatus() {
    return this.serverStatus;
  }
}