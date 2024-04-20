import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
//object of this class would be injected into a component class (constructor)
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts';

  //a service method. this method would be called from a component class
  checkLogin():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getObservableData():Observable<any>{   
    const numberObservable = new Observable<number>((observer) =>{
      let count = 1;
      const intervalId = setInterval(()=>{
        observer.next(count);
        if(count === 5){
          //observer.complete();
          //clearInterval(intervalId);
        }
        count++
      },1000)
    })
    return numberObservable   

  }


}
 