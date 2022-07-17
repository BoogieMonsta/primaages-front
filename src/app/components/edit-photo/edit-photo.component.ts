import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from 'src/app/interfaces/photo.interface';
import { GalleryService } from 'src/app/services/gallery.service';
import { omit } from 'lodash';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss'],
})
export class EditPhotoComponent implements OnInit {
  editPhotoForm!: FormGroup;
  @Input() id = '';
  constructor(
    private galleryService: GalleryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.editPhotoForm = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  get formControls() {
    return this.editPhotoForm.controls;
  }

  editPhoto(id: string) {
    if (this.editPhotoForm.invalid) {
      console.error('the data entered is invalid.');
      return;
    }
    // create modified JSON for photo & send it to API
    const description = this.editPhotoForm.value.description;
    this.galleryService.getPhotoById(id).subscribe((res) => {
      const img = res as Photo;
      img.metadata.description = description;

      this.galleryService
        .editPhoto(id, omit(img, '__v', '_id', 'id'))
        .subscribe({
          next: (res) => {
            this.toastr.success('successfully saved!');
            this.router.navigateByUrl('/gallery');
          },
        });
    });
  }
}
