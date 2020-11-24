import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient, private router: Router) {
  }


  public login(username, password): Observable<object> {
    return this.http.post(`${environment.apiUrl}users/signin`, {
      name: username,
      password
    }, {...this.options}).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}