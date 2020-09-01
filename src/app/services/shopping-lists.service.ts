import { Injectable } from '@angular/core';
import { ShoppingList } from '../model/shopping-list';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  private allShoppingLists = [
  ]

  public getAllShoppingLists(){

    return this.allShoppingLists;
  }

  constructor() {
    const warzywa = new ShoppingList('warzywa');
    let product = new Product('marchew', 1, 10, 5);
    warzywa.products.push(product);
    product = new Product('ziemniak', 2, 5, 8);
    warzywa.products.push(product);
    product = new Product('fasola', 1, 10, 5);
    warzywa.products.push(product);
    this.allShoppingLists.push(warzywa);

    const owoce = new ShoppingList('owoce');
    product = new Product('banany', 1, 2, 6);
    owoce.products.push(product);
    product = new Product('jabłka', 1, 3, 6);
    owoce.products.push(product);
    product = new Product('maliny', 8, 6, 7);
    this.allShoppingLists.push(owoce);

    const wędliny = new ShoppingList('wędliny');
    product = new Product('szynka', 2, 5, 6);
    wędliny.products.push(product);
    product = new Product('kiełbasa', 3, 5, 9);
    wędliny.products.push(product);
    product = new Product('polędwica', 3, 6, 8);
    wędliny.products.push(product);
    this.allShoppingLists.push(wędliny);

    ///njkkk

  }
}