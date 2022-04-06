import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { equalPasswordsValidator } from './signup.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup(
    {
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { validators: equalPasswordsValidator }
  );

  get emailAddress() {
    return this.signupForm.get('emailAddress');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get repeatPassword() {
    return this.signupForm.get('repeatPassword');
  }

  onSubmit() {
    console.log('ok');
  }
}
