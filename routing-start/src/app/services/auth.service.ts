import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logginIn=false;

  login(){
    this.logginIn=true;
  }

  logout(){
    this.logginIn=false;
  }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.logginIn);
        }, 800);
      }
    );
    return promise;
  }

  constructor() { }
}
