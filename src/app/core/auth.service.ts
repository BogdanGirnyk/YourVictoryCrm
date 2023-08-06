import { Injectable } from '@angular/core';
import { User } from './user';

const storageKey = 'current_user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setSession(user: User) {
    localStorage.setItem(storageKey, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(storageKey);
  }

  public isLoggedIn() {
  }
}
