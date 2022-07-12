import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_URL = '/sessions';

  constructor(private httpClient: HttpClient) {}

  public login(input: User) {
    return new Observable<boolean>((observer) => {
      this.httpClient
        .post(environment.baseUrl + this.AUTH_URL, input)
        .subscribe({
          next: (res) => {
            observer.next(true);
            observer.complete();
          },
          error: (error) => {
            observer.next(true);
            observer.complete();
          },
        });
    });
  }

  public logOut() {
    return new Observable<boolean>((observer) => {
      this.httpClient.get(environment.baseUrl + this.AUTH_URL).subscribe({
        next: (res) => {
          observer.next(true);
          observer.complete();
        },
        error: (error) => {
          observer.error(false);
          observer.complete();
        },
      });
    });
  }

  // TODO replace mock with real method
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
}
