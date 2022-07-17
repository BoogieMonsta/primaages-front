import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup; // definite assignment
  isSubmitted = false;
  constructor(
    private regService: RegistrationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  register() {
    if (this.registerForm.invalid) {
      console.log('the data entered is invalid.');
      return;
    }
    this.regService.register(this.registerForm.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/gallery');
        this.isSubmitted = true;
      },
    });
  }
}
