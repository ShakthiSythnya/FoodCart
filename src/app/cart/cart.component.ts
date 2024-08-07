import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { CartService } from '../services/cart.service';
import { cartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cartService:CartService) { }

  cart!:Cart;

  ngOnInit(): void {
    this.cart = this._cartService.getCart();

  }
  removeItemFromCart(item:cartItem)
  {
    this._cartService.removeItemFromCart(item.food);
    this.cart = this._cartService.getCart();
  }

}
