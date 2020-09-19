import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { ShoppingList } from '../../model/shopping-list';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})

export class ShoppingListsComponent implements OnInit {
//instancja klasy ShoppingListsComponent
  public lists = [];

  constructor(private shoppingListsService: ShoppingListsService){
  }

  ngOnInit(): void {
    //pobieram z serwisu listy zakupów
    this.lists = this.shoppingListsService.getAllShoppingLists();
  }
}

export class ShoppingList implements OnInit {
    public products = [];
  
    constructor(private shoppingList: ShoppingList){
    }
    
    ngOnInit(): void {
      this.products = this.shoppingList.products;
    }
  }