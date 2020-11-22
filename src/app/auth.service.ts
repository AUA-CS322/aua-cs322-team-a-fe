import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

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

  public login(username, password) {
    this.http.post(`${environment.apiUrl}users/signin`, {
      name: username,
      password
    }, {...this.options, responseType: 'text'}).subscribe((token: any) => {
      localStorage.setItem('token', token);
    }, (e) => {
      console.log(e);
    });
  }
}
