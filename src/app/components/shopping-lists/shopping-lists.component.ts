import { Component, OnInit } from '@angular/core';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { ShoppingList } from 'src/app/model/shopping-list';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})

export class ShoppingListsComponent implements OnInit {
//instancja klasy ShoppingListsComponent

  public lists = [];
  listToEdit: ShoppingList = null;
  showFirstList: boolean = false;

  constructor(private shoppingListsService: ShoppingListsService){
  }

  ngOnInit(): void {
    //pobieram z serwisu listy zakupów
    this.lists = this.shoppingListsService.getAllShoppingLists();
  }


}