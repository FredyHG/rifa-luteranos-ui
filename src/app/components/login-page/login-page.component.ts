import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {NgIf} from "@angular/common";
import {LoginPostRequest} from "../../models/LoginPostRequest";
import {AuthResponse} from "../../models/response/AuthResponse";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CardModule,
    PasswordModule,
    FormsModule,
    ChipsModule,
    ButtonModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {

    let form: LoginPostRequest = this.loginForm.value as LoginPostRequest

    this.authService.submitLoginForm(form).subscribe({
      next: (response: AuthResponse): void => {
        this.authService.login(response.access_token);
      },
      error: (err): void => {
        console.log("Login Fail")
      },
      complete: (): void => {
        console.log("Login complete")
      }
    })
  }
}
