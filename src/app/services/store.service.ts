import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private shoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  addProduct(product: Product) {
    this.shoppingCart.push(product);
    this.myCart.next(this.shoppingCart)
    
  }

  getShopping() {
    return this.shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
