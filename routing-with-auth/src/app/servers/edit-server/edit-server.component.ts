import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  paramsSubscription: Subscription;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  ngOnInit() {

    this.route.queryParams.subscribe(
      (queryParams) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    this.paramsSubscription= this.route.params.subscribe(
      (params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
