import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserCandid } from '../interfaces/user-candid.interface';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  REGISTRATION_URL = '/users';


  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  public register(input: UserCandid): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.httpClient
        .post(environment.baseUrl + this.REGISTRATION_URL, input)
        .subscribe({
          next: (res) => {
            this.toastr.success('Registration successful :)');
            observer.next(true);
            observer.complete();
          },
          error: (error) => {
            this.toastr.error('Error: registration unsuccessful.');
            observer.error(false);
            observer.complete();
          },
        });
    });
  }
}
