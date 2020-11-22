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
    }, {...this.options}).subscribe((data: any) => {
      if (data.body) {
        localStorage.setItem('token', data.body);
        this.router.navigate(['/profile']);
      } else{
        console.log(data.statusCode);
      }
    }, (e) => {
      console.log(e);
    });
  }
}
