import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  length: number;
  item:any = {
    count: 0
  }
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  addItemQuantity(item) {
    if(item.count >= 0 && item.count < 10) {
        item.count = item.count + 1;
        this.cartService.itemsInCart.next(this.cartService.getItemsInCart() + 1);
    } else {
      alert('you can not add more than 10 items');
    }
  }

  removeItemQuantity(item) {
    if(item.count > 1) {
      item.count = item.count - 1;
      this.cartService.itemsInCart.next(this.cartService.getItemsInCart() - 1);
    }
  }

  removeCartItem(item) {
    this.items = this.items.filter( (el:any) => {
      return el.id != item.id;
    });
    this.cartService.itemsInCart.next(this.cartService.getItemsInCart() - item.count);
    if(this.items.length === 0) {
      this.cartService.setItems(this.items);
    }
  }

  total() {
    return this.items.reduce((total, item) => total + ((item.price - (item.price * item.discount ) / 100 ) * item.count), 0);
  }

}
