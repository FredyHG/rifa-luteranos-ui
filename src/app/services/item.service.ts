import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Item} from "../models/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = '/assets/items.json';

  itemsInCart = new BehaviorSubject<Item[]>([]);
  itemInCart$ = this.itemsInCart.asObservable();

  currentItems: Item[] = [];


  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  addItemInCar(item: Item){
    this.currentItems.push(item);
    this.itemsInCart.next(this.currentItems);
  }

  removeItemInCar(itemToRemove: Item){
    this.currentItems = this.currentItems.filter(item => item.name !== itemToRemove.name);
    this.itemsInCart.next(this.currentItems);
  }

}
