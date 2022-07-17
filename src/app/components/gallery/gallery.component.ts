import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo.interface';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getPhotos().subscribe({
      next: (res) => {
        this.photos = res;
      },
    });
  }
}
