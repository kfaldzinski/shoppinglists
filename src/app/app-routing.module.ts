import { NewShoppingListComponent } from './components/new-shopping-list/new-shopping-list.component';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit/shopping-list-edit.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListsComponent,
  },
  {
    path: 'new-shopping-list',
    component: NewShoppingListComponent,
  },
  {
    path: 'shopping-list-edit',
    component: ShoppingListEditComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
