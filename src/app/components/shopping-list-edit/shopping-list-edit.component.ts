import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingList } from 'src/app/model/shopping-list';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListsService } from 'src/app/services/shopping-lists.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @Input()
  public list = new ShoppingList("");

  @Output()
  public buttonClick: EventEmitter<string> = new EventEmitter<string>();

  public nazwaListy: string;

  showInput: boolean = false;
  hideButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}

    public ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.nazwaListy = params['nazwa'];
      });
    }
  
  public cancel(): void {
    console.log('Cancel clicked');
    this.buttonClick.emit('cancel'); //emitujemy informację "cancel", którą odbierze rodzic
  }

  onKeydown(event) {
  //zapisanie w biącej shoppingList nowego produktu
    console.log(event);
  }

  public save(): void {
    //zapis do backendu
    console.log('Save clicked');
    this.buttonClick.emit('save'); //emitujemy informację "save", którą odbierze rodzic
    //zapisanie nowych produktow do biezacej listy
  }

  public showInputSection(): void {
    this.showInput = true;
    this.hideButton = true;
  }

}