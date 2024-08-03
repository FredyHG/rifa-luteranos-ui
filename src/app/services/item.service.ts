import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Raffle} from "../models/Raffle";
import {RaffleCollections} from "../models/RaffleCollections";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = '/assets/items.json';

  itemsInCart = new BehaviorSubject<Raffle[]>([]);
  itemInCart$ = this.itemsInCart.asObservable();

  currentItems: Raffle[] = [];


  constructor(private http: HttpClient) {}

  getItems(): Observable<RaffleCollections>{
    return this.http.get<RaffleCollections>(this.itemUrl);
  }

  addItemInCar(item: Raffle){
    this.currentItems.push(item);
    this.itemsInCart.next(this.currentItems);
  }

  removeItemInCar(itemToRemove: Raffle){
    this.currentItems = this.currentItems.filter(item => item.name !== itemToRemove.name);
    this.itemsInCart.next(this.currentItems);
  }

}
