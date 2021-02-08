import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShoppingList } from 'src/app/model/shopping-list';
import { ShoppingListsService } from 'src/app/services/shopping-lists.service';
import { Router } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-new-shopping-list',
  templateUrl: './new-shopping-list.component.html',
  styleUrls: ['./new-shopping-list.component.scss']
})
export class NewShoppingListComponent implements OnInit {

  constructor(
    private router: Router,
    private shoppingListService: ShoppingListsService,
    ) { }
  
  model = new ShoppingList('');

  ngOnInit(): void { }

  public onSave(): void {
    console.log('Save clicked');
    this.showShoppingList = true;
    const list = new ShoppingList('');
    this.listToEdit = list;
    this.shoppingListService.addShoppingList(this.model);
    this.router.navigate(['/shopping-list-edit'], { queryParams: { nazwa: this.model.name } });
  }

  onKeydown(event) {
    this.shoppingListService.addShoppingList(this.model);
    this.router.navigate(['/shopping-list-edit'], { queryParams: { nazwa: this.model.name } });
    console.log(event);
    }

//   this.lists = this.shoppingListsService.getAllShoppingLists();
//   <!-- [list] to jest input komponentu dziecka - shopping-list-edit, przekazujemy go z pola listToEdit, ktrego wartosc zostala 
// ustawiona podczas klikniecia przycisku +/-  -->

  listToEdit: ShoppingList = null;

  showShoppingList: boolean = false;

  public shoppingListButton(): void {
    console.log('Rodzic: Shopping list odebrał info o klilknięciu przycisku');
    this.showShoppingList = false;
  }
}