import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../models/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = '/assets/items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

}
