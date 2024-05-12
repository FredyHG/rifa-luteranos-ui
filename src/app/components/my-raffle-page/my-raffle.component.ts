import { Component } from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-my-raffle-page',
  standalone: true,
  imports: [
    CurrencyPipe,
    TableModule,
    ButtonModule
  ],
  templateUrl: './my-raffle.component.html',
  styleUrl: './my-raffle.component.scss'
})
export class MyRaffleComponent {

  currentArea: string = "Confirmadas";

  items: Item[] = [];

  constructor(private itemService: ItemService) {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe({
      next: response => {
        this.items = response
      },

    })
  }

  changeArea(area: string) {
    this.currentArea = area;
  }
}
