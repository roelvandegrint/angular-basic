import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  public login(): void {
    this.authService.login().subscribe();
  }
}
