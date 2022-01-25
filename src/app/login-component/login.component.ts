import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.login().subscribe();
  }
}
