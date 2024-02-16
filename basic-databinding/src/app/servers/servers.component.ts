import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  styles: [` 
  .fiveOrMore{ 
    color:white;
    background-color:blue;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string = '';
  servers = ['TestServer', 'TestServer 2'];
  showDetails=false;
  showArray=[];

serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created with name ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated=true;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onDisplayDetails(){
    this.showDetails=!this.showDetails;
    this.showArray.push(new Date());
  }
  ngOnInit() {}
}
