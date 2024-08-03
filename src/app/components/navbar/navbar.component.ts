import {Component, HostListener} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {BadgeModule} from "primeng/badge";
import {ItemService} from "../../services/item.service";
import {Raffle} from "../../models/Raffle";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    BadgeModule,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  resized: boolean = false;
  itemsInCard: number = 0;
  currentArea: string = 'raffles';

  constructor(private itemService: ItemService) {
    this.itemService.itemInCart$.subscribe(
      (itemsInCart: Raffle[]) => {
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

  navigateTo(path: string) {
    this.currentArea = path;
  }
}
