import {Component, HostListener} from '@angular/core';
import {NgIf} from "@angular/common";
import {BadgeModule} from "primeng/badge";
import {ItemService} from "../../services/item.service";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    BadgeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  resized: boolean = false;
  itemsInCard: number = 0;

  constructor(private itemService: ItemService) {
    this.itemService.itemInCart$.subscribe(
      (itemsInCart: Item[]) => {
        this.itemsInCard = itemsInCart.length;
      }
    );
  }

  toggleTabBar() {
    this.resized = !this.resized;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 600) {
      this.resized = false;
    }
  }
}
