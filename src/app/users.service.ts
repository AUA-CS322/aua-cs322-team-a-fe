import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getUser() {
    return this.http.get(`${environment.apiUrl}users/user`);
  }

  getUserById(username) {
    return this.http.get(`${environment.apiUrl}users/user/${username}`);
  }
}
