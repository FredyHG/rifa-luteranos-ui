import { Component } from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CurrencyPipe,
    TableModule,
    ButtonModule
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

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
