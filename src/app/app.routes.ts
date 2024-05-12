import { Routes } from '@angular/router';
import {RaffleZoneComponent} from "./components/raffle-zone/raffle-zone.component";
import {MyRaffleComponent} from "./components/my-raffle-page/my-raffle.component";

export const routes: Routes = [
  {path: '', component: RaffleZoneComponent},
  {path: 'cart', component: MyRaffleComponent}
];
