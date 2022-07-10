import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images: Photo[] = [
    {
      image: '../../../assets/photos/anh-nguyen.jpg',
      metadata: {
        width: 960,
        height: 960,
        description: 'by anh nguyen',
      },
    },
    {
      image: '../../../assets/photos/anna-pelzer.jpg',
      metadata: {
        width: 960,
        height: 640,
        description: 'by anna pelzer',
      },
    },
    {
      image: '../../../assets/photos/brooke-lark.jpg',
      metadata: {
        width: 960,
        height: 766,
        description: 'by brooke lark',
      },
    },
    {
      image: '../../../assets/photos/casey-lee.jpg',
      metadata: {
        width: 960,
        height: 1440,
        description: 'by casey lee',
      },
    },
    {
      image: '../../../assets/photos/chad-montano.jpg',
      metadata: {
        width: 960,
        height: 1160,
        description: 'by chad montano',
      },
    },
    {
      image: '../../../assets/photos/eiliv-sonas-aceron.jpg',
      metadata: {
        width: 960,
        height: 1440,
        description: 'by eiliv sonas aceron',
      },
    },
    {
      image: '../../../assets/photos/jimmy-dean.jpg',
      metadata: {
        width: 960,
        height: 640,
        description: 'by jimmy dean',
      },
    },
    {
      image: '../../../assets/photos/joseph-gonzalez.jpg',
      metadata: {
        width: 774,
        height: 1000,
        description: 'by joseph gonzalez',
      },
    },
    {
      image: '../../../assets/photos/lidye.jpg',
      metadata: {
        width: 960,
        height: 640,
        description: 'by lidye',
      },
    },
    {
      image: '../../../assets/photos/rachel-park.jpg',
      metadata: {
        width: 960,
        height: 640,
        description: 'by rachel park',
      },
    },
    {
      image: '../../../assets/photos/victoria-shes.jpg',
      metadata: {
        width: 960,
        height: 1440,
        description: 'by victoria shes',
      },
    },
  ];
}
