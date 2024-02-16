import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<Server>{
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{id: number, name: string, status: string}> | Promise<{id: number, name: string, status: string}> | {id: number, name: string, status: string} {
  return this.serversService.getServer(+route.params['id']);
}
constructor( private serversService: ServersService) { }

}
