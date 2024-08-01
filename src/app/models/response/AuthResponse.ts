export class AuthResponse{
  access_token: string;
  constructor(accessToken: string) {
    this.access_token = accessToken;
  }
}
