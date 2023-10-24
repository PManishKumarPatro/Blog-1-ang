

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'user', password: 'user', role: 'normal' },
  ];

  currentUser: any;

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      this.currentUser = user;
      return true;
    }

    return false;
  }

  logout() {
    this.currentUser = null;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === 'admin';
  }

  getCurrentUser() {
    return this.currentUser ? this.currentUser.username : null;
  }
  

isNormalUser() {
  return this.currentUser && this.currentUser.role === 'normal';
}

}
