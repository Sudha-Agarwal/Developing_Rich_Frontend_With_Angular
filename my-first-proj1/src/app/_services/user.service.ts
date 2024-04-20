import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//object of this class would be injected into a component class (constructor)
export class UserService {

  constructor() { }

  //a service method. this method would be called from a component class
  checkLogin(){
    return "login correct";
  }
}
