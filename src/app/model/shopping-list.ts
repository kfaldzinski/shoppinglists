import { Product } from "./product";

export class ShoppingList {
    public name: string;
    public products: Product[] = [];

    public constructor(name: string) {
      this.name = name;
    }
  }