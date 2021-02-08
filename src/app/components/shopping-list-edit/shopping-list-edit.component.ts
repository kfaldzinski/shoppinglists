import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingList } from 'src/app/model/shopping-list';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListsService } from 'src/app/services/shopping-lists.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';

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
  public productName: string;

  // tutaj dodajesz nowe pole productName

  showInput: boolean = false;
  hideButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public shoppingListService: ShoppingListsService,
    ) {}


    public ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.nazwaListy = params['nazwa'];
        this.productName = params['nazwa'];
      });
    }

  public cancel(): void {
    console.log('Cancel clicked');
    this.buttonClick.emit('cancel'); //emitujemy informację "cancel", którą odbierze rodzic
  }

  onKeydown(event) {
    this.router.navigate(['/shopping-list-edit'], { queryParams: { nazwa: this.productName } });
    console.log(event);
    }

  public save(): void {
    //zapis do backendu
    console.log('Save clicked');
    this.buttonClick.emit('save'); //emitujemy informację "save", którą odbierze rodzic
    }

  public showInputSection(): void {
    this.showInput = true;
    this.hideButton = true;
  }

}