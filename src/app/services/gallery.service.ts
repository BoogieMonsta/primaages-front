import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  IMAGES_API_URL = '/images';

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  public createImage(input: Photo): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.httpClient
        .post(environment.baseUrl + this.IMAGES_API_URL, input)
        .subscribe({
          next: (res) => {
            this.toastr.success('The photo is saved!');
            observer.next(true);
            observer.complete();
          },
          error: (error) => {
            this.toastr.error('Error: the photo could not be saved.');
            observer.next(true);
            observer.complete();
          },
        });
    });
  }

  public getImages(): Observable<Photo[]> {
    return new Observable<Photo[]>((observer) => {
      this.httpClient.get(environment.baseUrl + this.IMAGES_API_URL).subscribe({
        next: (res) => {
          observer.next(res as Photo[]);
          observer.complete();
        },
        error: (error) => {
          this.toastr.error('Error: could not get images.');
          observer.complete();
        },
      });
    });
  }
}