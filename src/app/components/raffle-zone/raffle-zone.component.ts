import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/Item";
import {NgForOf} from "@angular/common";
import {CarouselModule} from "primeng/carousel";
import {SpeedDialModule} from "primeng/speeddial";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-raffle-zone',
  standalone: true,
  imports: [
    NgForOf,
    CarouselModule,
    SpeedDialModule
  ],
  templateUrl: './raffle-zone.component.html',
  styleUrl: './raffle-zone.component.scss'
})
export class RaffleZoneComponent implements OnInit{

  items: Item[] = [];
  itemsFloatButton: MenuItem[] = [];

  constructor(private itemService: ItemService) {
    this.getItems();
  }

  ngOnInit(): void {
    this.itemsFloatButton = [
      {
        icon: 'pi pi-shopping-cart',
        command: () => {
          console.log('clicked')
        }
      },
    ];
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
