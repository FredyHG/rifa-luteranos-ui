import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CardModule,
    PasswordModule,
    FormsModule,
    ChipsModule,
    ButtonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  value!: string;
}
