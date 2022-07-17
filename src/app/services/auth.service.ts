import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_URL = '/sessions';

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  public login(input: User): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.httpClient
        .post(environment.baseUrl + this.AUTH_URL, input)
        .subscribe({
          next: (res) => {
            this.toastr.success('Welcome back :)');
            observer.next(true);
            observer.complete();
          },
          error: (error) => {
            this.toastr.error('Error: login unsuccessful.');
            observer.next(false);
            observer.complete();
          },
        });
      // WIP
      // .subscribe((res: any) => {
      //   AuthInterceptor.accessToken = res.accessToken;
      // });
    });
  }

  public logOut(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.httpClient.get(environment.baseUrl + this.AUTH_URL).subscribe({
        next: (res) => {
          this.toastr.success('You have been logged out');
          observer.next(true);
          observer.complete();
        },
        error: (error) => {
          // this.toastr.error('An error occurred while logging you out.'); // FIXME disabled for demo
          observer.error(false);
          observer.complete();
        },
      });
    });
  }

  // WIP
  // public isLoggedIn() {
  //   return new Observable<boolean>((observer) => {
  //     this.httpClient.get(environment.baseUrl + this.AUTH_URL).subscribe({
  //       next: (res) => {
  //         observer.next(true);
  //         observer.complete();
  //       },
  //       error: (error) => {
  //         observer.error(false);
  //         observer.complete();
  //       },
  //     });
  //   });
  // }
}
