import { Injectable } from '@angular/core';
import { ShoppingList } from '../model/shopping-list';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  private allShoppingLists = []

  public getAllShoppingLists(){

    return this.allShoppingLists;
  }

  constructor() {
    //instancja klasy ShoppingList
    const warzywa = new ShoppingList('Warzywa');
    let product = new Product('Marchew', 1, 10, 5);
    warzywa.products.push(product);
    //pole klasy ShoppingList
    product = new Product('Ziemniak', 2, 5, 8);
    warzywa.products.push(product);
    product = new Product('Fasola', 1, 10, 5);
    warzywa.products.push(product);
    this.allShoppingLists.push(warzywa);

    const owoce = new ShoppingList('Owoce');
    product = new Product('Banany', 1, 2, 6);
    owoce.products.push(product);
    product = new Product('Jabłka', 1, 3, 6);
    owoce.products.push(product);
    product = new Product('Maliny', 8, 6, 7);
    this.allShoppingLists.push(owoce);

    const wedliny = new ShoppingList('Wedliny');
    product = new Product('Szynka', 2, 5, 6);
    wedliny.products.push(product);
    product = new Product('Kiełbasa', 3, 5, 9);
    wedliny.products.push(product);
    product = new Product('Polędwica', 3, 6, 8);
    wedliny.products.push(product);
    this.allShoppingLists.push(wedliny);

  }

}