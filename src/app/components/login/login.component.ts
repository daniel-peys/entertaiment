import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { tokenDto } from './data';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  loginForm = new FormGroup({
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.loginService
      .login({
        email: this.emailAddress?.value,
        password: this.password?.value,
      })
      .subscribe((value: tokenDto) => {
        if (value) {
          this.authService.checkLogin(value);
          this.router.navigateByUrl('/home');
        } else {
          alert('email or password wrong');
        }
      });
  }
}
