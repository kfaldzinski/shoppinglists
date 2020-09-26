import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListsService } from '../../services/shopping-lists.service';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})

export class ShoppingListsComponent implements OnInit {
//instancja klasy ShoppingListsComponent
  
  lists = [];

  constructor(private shoppingListsService: ShoppingListsService){
  }

  ngOnInit(): void {
    //pobieram z serwisu listy zakupów
    this.lists = this.shoppingListsService.getAllShoppingLists();
  }
}