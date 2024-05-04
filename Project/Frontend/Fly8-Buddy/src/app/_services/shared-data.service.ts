import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubjectLogin = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.dataSubjectLogin.asObservable();

  LoggedIn(newValue: boolean) {
    this.dataSubjectLogin.next(newValue);
  }

  LoggedOut(newValue:boolean){
    this.dataSubjectLogin.next(newValue);
  }

  isLoggedIn:boolean;

  login(){
    this.isLoggedIn = true;
  }
  getLogin(){
    return this.isLoggedIn;
  }
  constructor() { }
}
