import { Routes } from '@angular/router';
import { RaffleZoneComponent } from "./components/raffle-zone/raffle-zone.component";
import { MyRaffleComponent } from "./components/my-raffle-page/my-raffle.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

export const routes: Routes = [
  {path: '', component: RaffleZoneComponent},
  {path: 'cart', component: MyRaffleComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent}
];
