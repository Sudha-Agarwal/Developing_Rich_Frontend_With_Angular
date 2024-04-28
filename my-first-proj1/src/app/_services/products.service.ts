import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3000';//server url
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'/products')   
  } 

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl+'/products',product)

  }

  updateProduct(product:Product):Observable<{message:string,product:Product}>{
    return this.http.put<{message:string,product:Product}>(this.baseUrl+'/products',product)
  }

  deleteProduct(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/products/${id}`);
  }

}
