import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {
  }

  searchUser(query) {
    return this.http.get(`${environment.apiUrl}users/search?query=`+query);
  }

}
