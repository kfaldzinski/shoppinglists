import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @Input()
  public list;

  @Output()
  public buttonClick: EventEmitter<string> = new EventEmitter<string>();

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
}