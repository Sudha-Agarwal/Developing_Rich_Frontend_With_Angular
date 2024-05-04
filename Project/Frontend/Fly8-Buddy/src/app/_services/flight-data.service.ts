import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../_models/flight.model';
import { Observable } from 'rxjs';
import { Booking } from '../_models/booking';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {
private url = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getFlightDetails():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/flights`);
  }
  getFlightPrice(formData:Flight):Observable<{totalPrice:number}>{    
    return this.http.post<{totalPrice:number}>( `${this.url}/flights`,formData )
  }

  createBooking(booking:Booking){
    return this.http.post( `${this.url}/createBooking`,booking);

  }
  
}
