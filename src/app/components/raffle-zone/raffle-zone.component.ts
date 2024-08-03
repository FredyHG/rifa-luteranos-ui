import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {Raffle} from "../../models/Raffle";
import {NgForOf} from "@angular/common";
import {CarouselModule} from "primeng/carousel";
import {SpeedDialModule} from "primeng/speeddial";
import {MenuItem} from "primeng/api";
import {RaffleCollections} from "../../models/RaffleCollections";

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

  items: Raffle[] = [];
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
      complete(): void {

      },
      error(err: any): void {

      },
      next: (response: RaffleCollections): void => {
        this.items = response.collection[0].raffles;
      }

    })
  }

  addCart(itemToAdd: Raffle): void{

    this.items = this.items.filter(item => item.name !== itemToAdd.name);
    this.itemService.addItemInCar(itemToAdd);
  }

  removeItem(item: Raffle) {
    this.itemService.removeItemInCar(item);
  }

}
