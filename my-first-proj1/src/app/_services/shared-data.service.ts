import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubjectLogin = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.dataSubjectLogin.asObservable();

  constructor() { }

  loggedIn(){
    this.dataSubjectLogin.next(true);
  }

  loggedOut(){
    this.dataSubjectLogin.next(false);
  }

  

}
