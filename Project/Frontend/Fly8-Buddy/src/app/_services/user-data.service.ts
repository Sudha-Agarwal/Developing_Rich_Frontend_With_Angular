import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private url: string = 'http://localhost:3000';
  private token: string;

  constructor(private http:HttpClient) { }

  checkLogin(user:User):Observable<{ message: string, token: string}>{   
    //here we would make connection with the server using HttpClient
    return this.http.post<{ message: string, token: string}>(this.url + '/login', user);
  }
  createNewUser(user:User):Observable<{message:string}>{
    //let userToSend = {email:user.email, firstName:user.name.firstName,lastName:user.name.lastName,password:user.password};
    return this.http.post<{message:string}>(this.url + '/createUser', user);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  deleteToken(){
    delete this.token;
  }
}
