import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { cartItem } from '../models/cartItem';
import { FoodService } from './food.service';
import { FoodRecipe } from '../models/foodRecipe';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Cart = new Cart();
  constructor() { }

  getCart(){
    return this.cart;
  }
  addItemsToCart(food: FoodRecipe){
   
      let existingItem = this.cart.items.find(x=>x.food.id === food.id);
      if(existingItem)
      {
        existingItem.quantity +=1;
      }
      else
      {
        this.cart.items.push(new cartItem(food));
      }
      return;    
  }

  removeItemFromCart(food:FoodRecipe)
  {
    this.cart.items.filter(x=>x.food.id != food.id);
  }
}
