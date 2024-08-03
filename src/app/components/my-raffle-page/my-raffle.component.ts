import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Raffle} from "../../models/Raffle";
import {ItemService} from "../../services/item.service";
import {TreeTableModule} from "primeng/treetable";
import {RaffleCollections} from "../../models/RaffleCollections";
import {TreeNode} from "primeng/api";
import {Collection} from "../../models/Collection";
import {AccordionModule} from "primeng/accordion";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-my-raffle-page',
  standalone: true,
  imports: [
    CurrencyPipe,
    TableModule,
    ButtonModule,
    TreeTableModule,
    NgIf,
    AccordionModule,
    NgForOf,
    CardModule
  ],
  templateUrl: './my-raffle.component.html',
  styleUrl: './my-raffle.component.scss'
})
export class MyRaffleComponent {

  currentArea: string = "Confirmadas";

  items: Raffle[] = [];
  raffleCollections: Collection[] = [];

  constructor(private itemService: ItemService) {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe({
      complete(): void {

      },
      error(err: any): void {

      },
      next: (response: RaffleCollections): void => {
        console.log(response)
        this.raffleCollections = response.collection;
      }

    })
  }

  mapToTreeNode(collections: Collection[]): TreeNode[] {
    console.log(collections)

    return collections.map(collection => ({
      data: {
        name: collection.name,
      },
      children: collection.raffles.map(raffle => ({
        data: {
          name: raffle.name,
          image: raffle.image,
          price: raffle.price
        }
      }))
    }));
  }

  changeArea(area: string) {
    this.currentArea = area;
  }
}
