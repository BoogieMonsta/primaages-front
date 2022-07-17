import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.authService.isLoggedIn().subscribe(); // WIP
  }

  logout(): void {
    this.authService.logOut().subscribe({
      next: (res) => {
        // TODO complete
      },
    });
  }
}
