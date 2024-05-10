import { Routes } from '@angular/router';
import {RaffleZoneComponent} from "./components/raffle-zone/raffle-zone.component";
import {CartPageComponent} from "./components/cart-page/cart-page.component";

export const routes: Routes = [
  {path: '', component: RaffleZoneComponent},
  {path: 'cart', component: CartPageComponent}
];
