import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
//object of this class would be injected into a component class (constructor)
export class UserService {
  token:string='';

  constructor(private http:HttpClient) { }
  //url = 'https://jsonplaceholder.typicode.com/posts';
  baseUrl = 'http://localhost:3000';

  //a service method. this method would be called from a component class
  checkLogin(user:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'/login',user);
  }

  getObservableData():Observable<any>{   
    const numberObservable = new Observable<number>((observer) =>{
      let count = 1;
      const intervalId = setInterval(()=>{
        observer.next(count);
        if(count === 5){
          observer.complete();
          clearInterval(intervalId);
        }
        count++
      },1000)
    })
    return numberObservable   

  }

  setToken(token:string){
    this.token = token;
  }

  getToken(){
    return this.token;
  }

  deleteToken(){
    delete this.token;
  }




}
 