import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  list: string = 'np. warzywa';

  list_product: string = 'jakiś produkt';

  constructor() { }
  
  ngOnInit(): void {
  }
}