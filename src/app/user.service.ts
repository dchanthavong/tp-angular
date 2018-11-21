import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_TO_GET_USERS = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.URL_TO_GET_USERS);
  }
}
