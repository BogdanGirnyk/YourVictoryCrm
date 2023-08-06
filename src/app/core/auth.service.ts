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

  public isLoggedIn(): boolean {
    const savedCurrUserString = localStorage.getItem(storageKey);
    if (!savedCurrUserString)
      return false;
    const user = JSON.parse(savedCurrUserString) as User;
    return Date.now() <= user.expiresAt * 1000;
  }
}
