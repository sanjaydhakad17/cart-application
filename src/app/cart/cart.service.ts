import { Injectable } from '@angular/core';
import { Observable, Subject } from  "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsInCart = new Subject<any>();

  items = [];
    //{"id":9090,"name":"Item1","price":200,"discount":10,"category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"},{"id":9091,"name":"Item2","price":250,"discount":15,"category":"literature","img_url":"http://lorempixel.com/500/600/technics/"}];
  itemInCart:number = 0;
  //{"id":9090,"name":"Item1","price":200,"discount":10,"category":"fiction","img_url":"http://lorempixel.com/500/600/technics/"}
  //];

  addToCart(product) {
    //this.setItemsInCart(this.itemInCart++);
    this.itemInCart = this.itemInCart + 1;
    this.setItemsInCart(this.itemInCart);
    
    if(this.items.length === 0) {
      product.count = 1;
      this.items.push(product);
     
    } else {

      if(!(JSON.stringify(this.items)).includes(product.id)) {
        this.items.push(product);
        product.count = 1;
      } else {
        product.count++;
      }
    }
  }

  getItems() {
    return this.items;
  }

  setItems(items) {
    this.items = items;
  }
  
  getItemsInCart() {
    return this.itemInCart;
  }

  setItemsInCart(itemCount) {
    this.itemInCart = itemCount;
  }

}
