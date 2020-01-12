import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cartApp';
  
  constructor(private shareDataService: SharedDataService, private cartService: CartService) {}
  
  ngOnInit() {
  }
}
