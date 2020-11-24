import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('signin') !== -1) {
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        Authorization: `${localStorage.getItem('token')}`
      }
    });
    return next.handle(request);
  }
}
