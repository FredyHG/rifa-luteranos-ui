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
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

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
    NgIf,
    ProgressSpinnerModule,
    ToastModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup;
  loginLoading: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm(): void {

    this.toggleSpinner();
    let form: LoginPostRequest = this.loginForm.value as LoginPostRequest

    this.authService.submitLoginForm(form).subscribe({
      next: (response: AuthResponse): void => {
        this.authService.login(response.access_token);
      },
      error: (err): void => {
        this.showFailedLogin();
        this.loginForm.controls['password'].setValue("");
        this.toggleSpinner();
      },
      complete: (): void => {
        this.showSuccessLogin();
        this.loginForm.reset();
        this.toggleSpinner();
      }
    });
  }

  toggleSpinner(): void {
    this.loginLoading = !this.loginLoading;
  }

  showSuccessLogin(): void {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
  }

  showFailedLogin(): void {
    this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Incorrect username or password. Please try again.' });
  }
}
