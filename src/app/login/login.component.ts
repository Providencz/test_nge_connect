import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      this.passwordValidator(),
    ]),
  });
  hide: boolean = true;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitForm() {
    this.router.navigateByUrl('/adresse');
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value;
      if (!value) {
        return null;
      }

      let upperCaseCheck = /[A-Z]+/.test(value);
      let lowerCaseCheck = /[a-z]+/.test(value);
      let numericCheck = /[0-9]+/.test(value);
      let passwordCheck = upperCaseCheck && lowerCaseCheck && numericCheck;

      return !passwordCheck ? { passwordValidation: true } : null;
    };
  }
}
