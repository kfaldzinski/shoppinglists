export class Product
{
  public name: string;
  public weight: number;
  public quantity: number;
  public price: number;
  public category: string;

  public constructor(name, weight, quantity, price) {
    this.name = name;
    this.weight = weight;
    this.quantity = quantity;
    this.price = price;
  }
}