import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo.interface';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];
  selectedPhotoId!: string; // definitely assign type
  singlePhotoView = false;
  constructor(private galleryService: GalleryService, private router: Router) {}

  ngOnInit(): void {
    this.galleryService.getPhotos().subscribe({
      next: (res) => {
        this.photos = res;
      },
    });
  }

  showPhoto(id: string) {
    this.singlePhotoView = true;
    this.selectedPhotoId = id;
  }
}
