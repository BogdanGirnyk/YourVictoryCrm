import { Component } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    google.accounts.id.initialize({
      client_id: "360316588489-ft4cfrseea14iktol3bno499bsrl5t0c.apps.googleusercontent.com",
      callback: this.handleCredentialResponse.bind(this),
      auto_select: false,
      cancel_on_tap_outside: true,

    });
    const buttonContainer = document.getElementById("google-button");
    if (!buttonContainer)
      throw new Error("No google-button elementt found");
    google.accounts.id.renderButton(
      buttonContainer,
      { theme: "outline", size: "large", type: "standard" }
    );
    google.accounts.id.prompt((n: google.accounts.id.PromptMomentNotification) => { })
  }
  async handleCredentialResponse(response: { credential: string }) {
    // Here will be your response from Google.
    const decodedToken: { name: string, email: string, exp: number } = jwt_decode(response.credential);
    const user: User = {
      name: decodedToken.name,
      email: decodedToken.email,
      expiresAt: decodedToken.exp,
      token: response.credential
    };
    this.authService.setSession(user);
  }
}
