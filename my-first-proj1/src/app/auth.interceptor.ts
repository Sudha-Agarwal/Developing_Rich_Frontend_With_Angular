import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './_services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
token:string;
  constructor(private userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = this.userService.getToken();
    if(this.token){
      request = request.clone({
        setHeaders: {
          Authorization: this.token
        }
      })
    }
    return next.handle(request);
  }
}
