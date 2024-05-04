import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  REST_API: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.REST_API}`)
  }
  private url = "http://localhost:3000"
  addProduct(product: any) :Observable<any>{
    console.log(product);
    return this.http.post<any>(`${this.url}/products`,product)
   
  }



  
}