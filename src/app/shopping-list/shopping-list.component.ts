import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingList: any;
  message:string
  subscription: Subscription;
  products: any;

  constructor(private serviceData : SharedDataService, private cartService: CartService) { }
  
  ngOnInit() {

    this.serviceData.getShoppingList().subscribe( response => {
      this.serviceData.setShopListData(response);
      this.shoppingList = response;
    });

    this.subscription = this.serviceData.shareData.pipe(
      debounceTime(500))
      .subscribe(data => {
        this.shoppingList = data; 
      });
    
  }

  addToCart(productData) {
    this.cartService.addToCart(productData);
    this.cartService.itemsInCart.next(this.cartService.getItemsInCart());
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
