import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataService } from './_services/user-data.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
token:string;

  constructor(private userService:UserDataService) {
    
  }
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Clone the request and add the Authorization header with the JWT token
    this.token = this.userService.getToken();
    console.log(this.token);
    if (this.token) {
      console.log("interceptor");
      request = request.clone({
        setHeaders: {
          Authorization: this.token
        }
      });
    }
    // Pass on the modified request to the next handler
    return next.handle(request);

  }
}