import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {LoginPostRequest} from "../models/LoginPostRequest";
import {AuthResponse} from "../models/response/AuthResponse";
import {environment} from "../../../environment";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuth = environment.apiUrlAuth;

  constructor(private cookieService: CookieService,
              private httpClient: HttpClient,
              ) {

  }

  submitLoginForm(formData: LoginPostRequest): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>('/api/auth/authenticate', formData, httpOptions)
  }

  login(accessToken: string): void {
    this.cookieService.set('accessToken', accessToken, 86400000)
  }
}
