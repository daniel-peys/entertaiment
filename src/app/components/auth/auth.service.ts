import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenDto } from '../login/data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedIn: boolean = false;

  checkLogin(token: tokenDto) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      }),
    };

    this.http
      .get<boolean>('http://localhost:3000/api/check', httpOptions)
      .subscribe((value) => {
        this.loggedIn = value;
      });
  }
}
