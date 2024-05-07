import { Component } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/Item";
import {resolve} from "@angular/compiler-cli";
import {NgForOf} from "@angular/common";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-raffle-zone',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './raffle-zone.component.html',
  styleUrl: './raffle-zone.component.scss'
})
export class RaffleZoneComponent {

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

  addCart(itemToAdd: Item): void{

    this.items = this.items.filter(item => item.name !== itemToAdd.name);
    this.itemService.addItemInCar(itemToAdd);
  }

  removeItem(item: Item) {
    this.itemService.removeItemInCar(item);
  }
}
