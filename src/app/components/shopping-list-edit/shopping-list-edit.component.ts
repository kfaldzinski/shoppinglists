import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { ShoppingList } from 'src/app/model/shopping-list';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
=======
>>>>>>> 19a155604fd181afaa921ef324fc7711e8eb98e2

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

<<<<<<< HEAD
  public nazwaListy: string;

  showInput: boolean = false;
  hideButton: boolean = false;

  constructor(
    private route: ActivatedRoute,
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

  public save(): void {
    //zapis do backendu
    console.log('Save clicked');
    this.buttonClick.emit('save'); //emitujemy informację "save", którą odbierze rodzic
  
  }

  public showInputSection(): void {
    this.showInput = true;
    this.hideButton = true;
  }

=======
  constructor() { }

  ngOnInit(): void {
  }

  public cancel(): void {
    console.log('Cancel clicked');
    this.buttonClick.emit('cancel');  // emitujemy informację cancel, którą odbierze rodzic
  }

  public save(): void {
    // zapis do backendu
    console.log('Save clicked');
    this.buttonClick.emit('save'); // emitujemy informację save, którą odbierze rodzic
  }
>>>>>>> 19a155604fd181afaa921ef324fc7711e8eb98e2
}