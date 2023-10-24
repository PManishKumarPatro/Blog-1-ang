

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const username = this.username;
    const password = this.password;

    if (this.authService.login(username, password)) {
      // Successful login, navigate to the blog list
      this.router.navigate(['/blog-list']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }

  logout() {
    this.authService.logout();
  }
}
