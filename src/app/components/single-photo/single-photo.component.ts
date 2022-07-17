import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo.interface';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
})
export class SinglePhotoComponent implements OnInit {
  photo!: Photo; // definitely assign type
  isLoaded = false;
  credits!: string;
  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.galleryService.getPhotoById(id).subscribe({
      next: (res) => {
        this.photo = res as Photo;
        this.isLoaded = true;
        this.credits = this.photo.metadata.description;
      },
      error: (error) => {
        console.error('error loading single photo');
      },
    });
  }
}
